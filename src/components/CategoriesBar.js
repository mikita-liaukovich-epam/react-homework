import React from 'react'

function clickHandler(e) {
  const active = document.querySelector('.VODCollection nav .active')
  if (active) active.classList.remove('active');
  e.target.classList.add('active');
}

export default () => {
  return (<nav onClick={clickHandler}>
    <li className="active">All</li>
    <li>Documentary</li>
    <li>Comedy</li>
    <li>Horror</li>
    <li>Crime</li>
  </nav>)
}