import React from 'react'
import ReactDOM from 'react-dom'
import Genres from '../models/Genres.DataModel'
import DetailsPage from '../views/DetailsPage.View'
import ErrorBoundary from './ErrorBoundary'

function handleClick(e) {
  e.preventDefault();
  const active = document.body.querySelector(`.kebab-menu.active`)

  if (active) active.classList.remove('active');

  e.target.classList.add('active')
}

function openDetailsPage(props) {
  ReactDOM.render(
    <ErrorBoundary>
        <DetailsPage {...props}/>
    </ErrorBoundary>,
    document.getElementById("root")
);
}

export default function Card(props) {
  const {
    assetsPath,
    src,
    title,
    date,
    genre,
    id: movieID,
    modalHandler,
  } = props;

  return <a className="card" href="javascript:void(0);" onClick={() => openDetailsPage(props)}>
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
          <li onClick={() => modalHandler({ type: "edit", modalOptions: props })}>Edit</li>
          <li onClick={() => modalHandler({ type: "delete", modalOptions: props })}>Delete</li>
        </ul>
      </div>
    </div>
  </a>
};
