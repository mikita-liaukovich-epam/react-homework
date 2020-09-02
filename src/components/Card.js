import React from "react";
import Genres from '../models/Genres.DataModel'

function handleClick(e) {
  e.preventDefault();
  const active = document.body.querySelector(`.kebab-menu.active`)

  if (active) active.classList.remove('active');

  e.target.classList.add('active')
}

export default (props) => {
  const {
    assetsPath,
    src,
    title,
    date,
    genre,
    id: movieID,
    modalHandler,
  } = props;

  return <a className="card" href="#">
    <div className="card--image-wrapper">
      <img src={assetsPath + src} alt={title} />
    </div>
    <div className="card--info">
      <h3>{title}</h3>
      <p>{date.year}</p>
    </div>
    <p>{Genres[genre]}</p>
    <div className="kebab-menu" onClick={handleClick}>
      <div className="kebab-menu--content">
        <button onClick={handleClick}>✕</button>
        <ul>
          <li onClick={() => modalHandler({ isEdit: true, modalOptions: props })}>Edit</li>
          <li onClick={() => modalHandler({ isDelete: true })}>Delete</li>
        </ul>
      </div>
    </div>
  </a>
};
