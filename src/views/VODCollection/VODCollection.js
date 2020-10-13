import React, { useState, useCallback } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import Container from '../../components/Container/Container'
import Heading from '../../components/Heading/Heading'
import CategoriesBar from '../../components/CategoriesBar/CategoriesBar'
import SorterDropdown from '../../components/SorterDropdown/SorterDropdown'
import Card from '../../components/Card/Card'
import DeletingModal from '../../components/Modals/DeletingModal'
import EditingModal from '../../components/Modals/EditingModal'

import './VODCollection.scss'

export default function VODCollection() {
    const { totalAmount, data } = useSelector(state => state.viewData);

    const [isDeleteModalShown, setIsDeleteModalShown] = useState(false);
    const [isEditModalShown, setIsEditModalShown] = useState(false);
    const [modalOptions, setModalOptions] = useState({});

    function handleToggleModal(options) {
        const { type, modalOptions = {} } = options;

        switch (type) {
            case "delete": {
                setIsDeleteModalShown(!isDeleteModalShown);
                setIsEditModalShown(false);
                break;
            }
            case "edit": {
                setIsEditModalShown(!isEditModalShown);
                setIsDeleteModalShown(false);
                break;
            }
        }

        setModalOptions(modalOptions)
    }

    return <div className="VODCollection">
        <Container>
            <header className="font_thin">
                <CategoriesBar />
                <SorterDropdown />
            </header>
            <p className="match-count font_thin">
                <b>{totalAmount}</b> movies found</p>
            <div className="cards-container">
                {data.map(movieData => Card({
                        ...movieData,
                        modalHandler: handleToggleModal
                    }))
                }
            </div>
        </Container>
        <footer>
            <Heading />
        </footer>
        { isDeleteModalShown &&
            <DeletingModal modalOptions={modalOptions} onCloseRequest={() => handleToggleModal({ type: "delete" })}/> }
        { isEditModalShown &&
            <EditingModal modalOptions={modalOptions} onCloseRequest={() => handleToggleModal({ type: "edit" })}/> }
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