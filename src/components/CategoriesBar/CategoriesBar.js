import React from 'react'
import { useDispatch } from 'react-redux'
import { _genres } from '../../models/Genres.DataModel'
import { fetchGenre } from '../../redux/actions/Movie.actions'

export default function CategoriesBar() {
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    if (e.target.tagName !== 'LI') return;
    const active = document.querySelector('.VODCollection nav .active')
    if (active) active.classList.remove('active');
    e.target.classList.add('active');
  
    dispatch(fetchGenre(e.target.innerText));
  }

  return (<nav onClick={clickHandler}>
    <li key='All' className='active'>All</li>
    {
      Object.keys(_genres).map(genre =>
        <li key={genre}>{genre}</li>
      )
    }
  </nav>)
}