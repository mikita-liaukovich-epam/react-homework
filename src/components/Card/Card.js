import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from '../../redux/store'
import {_genres} from '../../models/Genres.DataModel'
import DetailsPage from '../../views/DetailsPage/DetailsPage'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'

import './Card.scss'

function handleClick(e) {
  e.preventDefault();
  const active = document.body.querySelector(`.kebab-menu.active`)

  if (active) active.classList.remove('active');

  e.target.classList.add('active')
}

function openDetailsPage(props) {
  ReactDOM.render(
    <Provider store={store}>
      <ErrorBoundary>
          <DetailsPage {...props}/>
      </ErrorBoundary>
    </Provider>,
    document.getElementById("root")
);
}

export default function Card(props) {
  const {
    poster_path,
    title,
    release_date,
    genres,
    id,
    modalHandler,
  } = props;

  return <a key={id} className="card" href="javascript:void(0);" onClick={() => openDetailsPage(props)}>
    <div className="card--image-wrapper">
      <img src={poster_path} alt={title} />
    </div>
    <div className="card--info">
      <div className="title-wrapper">
        <h3>{title}</h3>
      </div>
      <p>{release_date.substr(0, 4)}</p>
    </div>
    <p>{genres.join(', ')}</p>
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
