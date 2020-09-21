import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'

import Container from '../components/Container'
import Heading from '../components/Heading'
import CategoriesBar from '../components/CategoriesBar'
import SorterDropdown from '../components/SorterDropdown'
import Card from '../components/Card.js'
import DeletingModal from '../components/Modals/DeletingModal'
import EditingModal from '../components/Modals/EditingModal'

export default function VODCollection({ VODList, assetsPath }) {
    const [VODCount, ] = useState(VODList.length);
    const [VODCards, ] = useState(useCallback(
        () => VODList.map(movieData => {
            return Card({
                ...movieData,
                assetsPath: assetsPath,
                modalHandler: handleToggleModal
            })}
        ),
        [VODList, assetsPath]
        ));
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
                <b>{VODCount}</b> movies found</p>
            <div className="cards-container">
                {VODCards}
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
    VODList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        genre: PropTypes.string,
        date: PropTypes.shape({
            year: PropTypes.string,
            month: PropTypes.string,
            day: PropTypes.string
        }),
        rating: PropTypes.number,
        duration: PropTypes.number,
        url: PropTypes.string,
        src: PropTypes.string,
        overview: PropTypes.string,
        runtime: PropTypes.string
    }))
};