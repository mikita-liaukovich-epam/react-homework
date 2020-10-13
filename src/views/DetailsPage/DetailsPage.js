import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Container from '../../components/Container/Container'
import Heading from '../../components/Heading/Heading'
import { _genres } from '../../models/Genres.DataModel'

import './DetailsPage.scss'

export default function DetailsPage(props) {
  const dispatch = useDispatch();

  const { data } = useSelector(state => state);

  let image;

  return (
    <div className="details-page fixed-center-page">
      <Container>
        <header>
          <Heading />
          <button className="search-button" onClick={() => dispatch({type: 'setState', payload: { currentView: 'Landing'}})}></button>
        </header>
        <main>
          <div className="details-page--grid">
            <img ref={el=>image=el} onError={()=>image.src='https://argamak-sher.uz/wp-content/uploads/no-image.png'} src={data.poster_path} alt={data.title} />
            <div className="details-page--content">
              <div className="content_row">
                <h2>{data.title}</h2>
                <div className="content-rating">{data.vote_average}</div>
              </div>
              <p className="font_thin">{data.genres.join(', ')}</p>
              <div className="content_row colored-text">
                <p>{data.release_date.substr(0, 4)}</p>
                <p>{data.runtime + ' min'}</p>
              </div>
              <p className="content--overview">{data.overview}</p>
            </div>
          </div>
        </main>
      </Container>
    </div>
  );
}
