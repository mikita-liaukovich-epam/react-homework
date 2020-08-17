import React from 'react';
import Container from '../models/Container'

export default class Landing extends React.Component {
    render() {
        return <div className="landing">
            <Container>
                <header>
                        <this.heading />
                        <this.buttonAdd />    
                </header>
                <main>
                    <this.searchTitle />
                    <this.searchForm />
                </main>
            </Container>
        </div>
    }
    
    heading() {
        return (<h1><a href="https://netflix.com" target="_blank">netflix</a>
            <span className="font_thin"><a href="#">roulette</a></span></h1>)
    }
    
    buttonAdd() {
        return <button className="header--button-add">+ Add movie</button>
    }

    searchForm() {
        return <React.Fragment>
            <form className="landing--search-form">
                <input type="text" placeholder="What do you want to watch?" className="search-text"/>
                <button type="submit" id="submitButton" className="submit-button">Search</button>
            </form>
        </React.Fragment>
    }

    searchTitle() {
        return <h2 className="font_thin landing--search-title">Find your movie</h2>
    }
}