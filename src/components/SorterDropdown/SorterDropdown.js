import React from 'react'
import { useDispatch } from 'react-redux'
import { _filter } from '../../models/Filter.DataModel'
import { fetchSort } from '../../redux/actions/Filter.actions'

import './SorterDropdown.scss'

export default function SorterDropdown() {
  const dispatch = useDispatch();

  return <div className="nav-filter">
    <p>Sort by</p>
    <div className="dropdown">
      <button className="dropbtn">Release Date</button>
      <div className="dropdown-content" onClick={e => dispatch(fetchSort(e.target.innerHTML))}>
        {
          Object.keys(_filter).map(type => {
            return <a key={type} href="#">{_filter[type]}</a>
          })
        }
      </div>
    </div>
  </div>
}