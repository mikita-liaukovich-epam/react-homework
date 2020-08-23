import React from 'react'
import PropTypes from 'prop-types'

import Container from '../components/Container'
import Heading from '../components/Heading'
import CategoriesBar from '../components/CategoriesBar'
import SorterDropdown from '../components/SorterDropdown'
import Card from '../components/Card';

export default class VODCollection extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.assetsPath = this.props.assetsPath;
        this.VODList = this.props.VODList;
    }

    render() {
        this.movieCards = [];

        this.VODList.forEach(movie => {
            this.movieCards.push(Card({ ...movie, assetsPath: this.assetsPath }));
        })

        return <div className="VODCollection">
            <Container>
                <header className="font_thin">
                    <CategoriesBar />
                    <SorterDropdown />
                </header>
                <p className="match-count font_thin">
                    <b>{this.movieCards.length}</b> movies found</p>
                <div className="cards-container">
                    {this.movieCards}
                </div>
            </Container>
            <footer>
                <Heading />
            </footer>
        </div>
    }
}

VODCollection.propTypes = {
    assetsPath: PropTypes.string,
    VODList: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        genre: PropTypes.string,
        year: PropTypes.number,
        src: PropTypes.string
    }))
};