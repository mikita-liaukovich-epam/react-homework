import React from 'react'
import ReactDOM from 'react-dom'

function clickHandler() {
    ReactDOM.render(
        <ErrorBoundary>
            <Landing />
        </ErrorBoundary>,
        rootElement
    );
}

export default () => {
    return (
        <h1 className="heading"><a href="https://netflix.com" target="_blank">netflix</a>
            <span className="font_thin"><a href="" onClick={clickHandler}>roulette</a></span></h1>
    )
}