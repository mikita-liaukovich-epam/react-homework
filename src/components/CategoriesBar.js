import React from 'react'
import Genres from '../models/Genres.DataModel'

function clickHandler(e) {
  const active = document.querySelector('.VODCollection nav .active')
  if (active) active.classList.remove('active');
  e.target.classList.add('active');
}

export default () => {
  return (<nav onClick={clickHandler}>
    <li key="all" className="active">All</li>
    {
      Object.keys(Genres).map(genre =>
        <li key={genre}>{genre}</li>
      )
    }
  </nav>)
}