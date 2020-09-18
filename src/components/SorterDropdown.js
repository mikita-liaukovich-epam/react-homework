import React from 'react'

function clickHandler(e) {
  console.log(`clicked on ${e.target.innerHTML}`)
}

export default () => {
  return <div className="nav-filter">
    <p>Sort by</p>
    <div className="dropdown">
      <button className="dropbtn">Release Date</button>
      <div className="dropdown-content" onClick={clickHandler}>
        <a href="#">A -&gt; Z</a>
        <a href="#">Z -&gt; A</a>
        <a href="#">Popularity</a>
      </div>
    </div>
  </div>
}