import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Container from '../../components/Container/Container'
import Heading from '../../components/Heading/Heading'
import { _genres } from '../../models/Genres.DataModel'

import './DetailsPage.scss'

export default function DetailsPage({ assetsPath, src, title, rating, genre, date, duration, overview }) {
  return (
    <div className="details-page fixed-center-page">
      <Container>
        <header>
          <Heading />
          <button className="search-button"></button>
        </header>
        <main>
          <div className="details-page--grid">
            <img src={assetsPath + src} alt={title} />
            <div className="details-page--content">
              <div className="content_row">
                <h2>{title}</h2>
                <div className="content-rating">{rating}</div>
              </div>
              <p className="font_thin">{_genres[genre]}</p>
              <div className="content_row colored-text">
                <p>{date.year}</p>
                <p>{duration + ' min'}</p>
              </div>
              <p className="content--overview">{overview}</p>
            </div>
          </div>
        </main>
      </Container>
    </div>
  );
}
