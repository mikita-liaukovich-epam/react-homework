import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Container from '../models/Container'

export default class VODCollection extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.assetsPath = this.props.assetsPath;
        this.VODList = this.props.VODList;
    
        this.handleNavClick = this.handleNavClick.bind(this);
        this.handleSortClick = this.handleSortClick.bind(this);
        this.handleHomeClick = this.handleHomeClick.bind(this);
        this.footer = this.footer.bind(this);
        this.navBar = this.navBar.bind(this);
        this.filterContainer = this.filterContainer.bind(this);
    }

    render() {
        this.movieCards = [];

        this.VODList.forEach(movie => {
            this.movieCards.push(this.card(movie)) ;
        })

        return <div className="VODCollection">
            <Container>
                <header className="font_thin">
                    <this.navBar />
                    <this.filterContainer />
                </header>
                <this.matchCount />
                <div className="cards-container">
                    {this.movieCards}
                </div>
            </Container>
            <this.footer />
        </div>
    }

    handleNavClick(e) {
        const active = document.querySelector('.VODCollection nav .active')
        if (active) active.classList.remove('active');
        e.target.classList.add('active');
    }

    handleSortClick(e) {
        console.log(`clicked on ${e.target.innerHTML}`)
    }

    handleHomeClick() {
        ReactDOM.render(
            <ErrorBoundary>
              <Landing />
            </ErrorBoundary>,
            rootElement
        );
    }

    navBar() {
        return (<nav onClick={this.handleNavClick}>
            <li className="active">All</li>
            <li>Documentary</li>
            <li>Comedy</li>
            <li>Horror</li>
            <li>Crime</li>
        </nav>)
    }

    filterContainer() {
        return <div className="nav-filter">
            <p>Sort by</p>
            <div class="dropdown">
                <button class="dropbtn">Release Date</button>
                <div class="dropdown-content" onClick={this.handleSortClick}>
                    <a href="#">A -&gt; Z</a>
                    <a href="#">Z -&gt; A</a>
                    <a href="#">Popularity</a>
                </div>
            </div>
        </div>
    }

    matchCount() {
        return <p className="match-count font_thin"><b>39</b> movies found</p>
    }

    card(props) {
        return <a className="card" href="#">
            <div className="card--image-wrapper">
                <img src={this.assetsPath + props.src} alt={props.title} />
            </div>
            <div className="card--grid">
                <h3>{props.title}</h3>
                <p>{props.year}</p>
            </div>
            <p>{props.genre}</p>
        </a>
    }

    footer() {
        return (<footer>
            <h1><a href="https://netflix.com" target="_blank">netflix</a>
            <span className="font_thin"><a href="" onClick={this.handleHomeClick}>roulette</a></span></h1>
        </footer>)
    }
}

VODCollection.propTypes = {
    assetsPath: PropTypes.string,
    VODList: PropTypes.array
};