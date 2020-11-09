import React, { useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom' 
import PropTypes from 'prop-types'

import Container from '../../components/Container/Container'
import Heading from '../../components/Heading/Heading'
import CategoriesBar from '../../components/CategoriesBar/CategoriesBar'
import SorterDropdown from '../../components/SorterDropdown/SorterDropdown'
import Card from '../../components/Card/Card'
import { searchMovie } from '../../redux/actions/Movie.actions'
import DeletingModal from '../../components/Modals/DeletingModal'
import EditingModal from '../../components/Modals/EditingModal'

import './VODCollection.scss'

export default function VODCollection() {
    const dispatch = useDispatch();
    const query = new URLSearchParams(useLocation().search);    
    const { totalAmount, data, modal } = useSelector(state => state);

    if (!Array.isArray(data)) dispatch(searchMovie(query.get('value')));

    return <div className="VODCollection">
        <Container>
            <header className="font_thin">
                <CategoriesBar />
                <SorterDropdown />
            </header>
            <p className="match-count font_thin">
                <b>{totalAmount}</b> movies found</p>
            <div className="cards-container">
                { (data && Array.isArray(data)) &&
                    data.map(movieData => Card(movieData))
                }
            </div>
        </Container>
        <footer>
            <Heading />
        </footer>
        { modal === 'delete' &&
            <DeletingModal /> }
        { modal === 'edit' &&
            <EditingModal /> }
    </div>
}

VODCollection.propTypes = {
    assetsPath: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        tagline: PropTypes.string,
        vote_average: PropTypes.number,
        vote_count: PropTypes.number,
        release_date: PropTypes.string,
        poster_path: PropTypes.string,
        overview: PropTypes.string,
        runtime: PropTypes.number,
        budget: PropTypes.number,
        revenue: PropTypes.revenue,
        genres: PropTypes.arrayOf(PropTypes.string),
    }))
};