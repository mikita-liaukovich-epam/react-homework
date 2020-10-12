import React from 'react'
import { useDispatch } from 'react-redux'
import { _genresFriendlyNames } from '../../models/Genres.DataModel'
import { fetchGenre } from '../../redux/actions/Genre.actions'

function clickHandler(e, dispatch) {
  if (e.target.tagName !== 'LI') return;
  const active = document.querySelector('.VODCollection nav .active')
  if (active) active.classList.remove('active');
  e.target.classList.add('active');
  dispatch(fetchGenre(e.target.innerHTML));
}

export default function CategoriesBar() {
  const dispatch = useDispatch();

  return (<nav onClick={(e) => clickHandler(e, dispatch)}>
    {
      Object.keys(_genresFriendlyNames).map((genre, index) =>
        <li key={genre} className={index === 0 ? 'active' : undefined}>{genre}</li>
      )
    }
  </nav>)
}