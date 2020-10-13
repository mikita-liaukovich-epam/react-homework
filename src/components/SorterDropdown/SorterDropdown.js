import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { _filter } from '../../models/Filter.DataModel'
import { fetchMovies } from '../../redux/actions/Movie.actions'

import './SorterDropdown.scss'

export default function SorterDropdown() {
  const dispatch = useDispatch();
  const { selectedGenre } = useSelector(state => state)

  let selected;

  return <div className="nav-filter">
    <p>Sort by</p>
    <div className="dropdown">
      <button ref={el => selected = el} data-sort="" className="dropbtn">By Default</button>
      <div className="dropdown-content" onClick={e => {
        dispatch(fetchMovies(selectedGenre, e.target.dataset.sort))
        const tempSort = selected.dataset.sort
        const tempText = selected.innerText
        selected.innerText = e.target.innerText
        selected.dataset.sort = e.target.dataset.sort
        e.target.innerText = tempText
        e.target.dataset.sort = tempSort
      }}>
        {
          Object.keys(_filter).map(type => {
            return <a key={type} data-sort={type} href="#">{_filter[type]}</a>
          })
        }
      </div>
    </div>
  </div>
}