import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {_genres} from '../../models/Genres.DataModel'

import './Card.scss'

function handleClick(e) {
  e.preventDefault();
  e.stopPropagation();
  const active = document.body.querySelector(`.kebab-menu.active`)

  if (active) active.classList.remove('active');

  e.target.classList.add('active')
}

export default function Card(props) {
  const dispatch = useDispatch();

  const {
    poster_path,
    title,
    release_date,
    genres,
    id,
  } = props;

  let image;

  return <a key={id} className="card" href="javascript:void(0);" onClick={() => dispatch({type: 'setState', payload: { data: props }})}>
    <div className="card--image-wrapper">
      <img ref={el=>image=el} onError={()=>image.src='https://argamak-sher.uz/wp-content/uploads/no-image.png'} src={poster_path} alt={title} />
    </div>
    <div className="card--info">
      <div className="title-wrapper">
        <h3>{title}</h3>
      </div>
      <p>{release_date.substr(0, 4)}</p>
    </div>
    <p className="card--genres">{genres.join(', ')}</p>
    <div className="kebab-menu" onClick={handleClick}>
      <div className="kebab-menu--content">
        <button onClick={handleClick}>✕</button>
        <ul>
          <li onClick={() => dispatch({type: 'setState', payload: { modal: 'edit', modalOptions: props}})}>Edit</li>
          <li onClick={() => dispatch({type: 'setState', payload: { modal: 'delete', modalOptions: props}})}>Delete</li>
        </ul>
      </div>
    </div>
  </a>
};
