import React from 'react'
import PropTypes from 'prop-types'

import Container from '../components/Container'
import Heading from '../components/Heading'
import CategoriesBar from '../components/CategoriesBar'
import SorterDropdown from '../components/SorterDropdown'
import Card from '../components/Card.js'
import DeletingModal from '../components/Modals/DeletingModal'
import EditingModal from '../components/Modals/EditingModal'

export default class VODCollection extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;

        this.handleToggleModal = this.handleToggleModal.bind(this);

        this.state = {
            VODCount: this.props.VODList.length,
            VODCards: () => <React.Fragment> {
                        this.props.VODList.map(movieData => {
                            return Card({ ...movieData, assetsPath: this.props.assetsPath, modalHandler: this.handleToggleModal });
                        })
                    } </React.Fragment>,
            isDeleteModalShown: false,
            isEditModalShown: false,
            modalOptions: {},
        }
    }

    handleToggleModal(options) {
        const { isDelete = false, isEdit = false, modalOptions = {} } = options;

        if (isDelete) this.setState({
            isDeleteModalShown: !this.state.isDeleteModalShown,
            isEditModalShown: false,
            modalOptions
        })

        if (isEdit) this.setState({
            isEditModalShown: !this.state.isEditModalShown,
            isDeleteModalShown: false,
            modalOptions
        })
    }

    render() {
        return <div className="VODCollection">
            <Container>
                <header className="font_thin">
                    <CategoriesBar />
                    <SorterDropdown />
                </header>
                <p className="match-count font_thin">
                    <b>{this.state.VODCount}</b> movies found</p>
                <div className="cards-container">
                    {this.state.VODCards()}
                </div>
            </Container>
            <footer>
                <Heading />
            </footer>
            { this.state.isDeleteModalShown &&
                <DeletingModal modalOptions={this.state.modalOptions} onCloseRequest={() => this.handleToggleModal({ isDelete: true })}/> }
            { this.state.isEditModalShown &&
                <EditingModal modalOptions={this.state.modalOptions} onCloseRequest={() => this.handleToggleModal({ isEdit: true })}/> }
        </div>
    }
}

VODCollection.propTypes = {
    assetsPath: PropTypes.string,
    VODList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        genre: PropTypes.string,
        date: PropTypes.objectOf(PropTypes.shape({
            year: PropTypes.string,
            month: PropTypes.string,
            day: PropTypes.day
        })),
        url: PropTypes.string,
        src: PropTypes.string,
        overview: PropTypes.string,
        runtime: PropTypes.string
    }))
};