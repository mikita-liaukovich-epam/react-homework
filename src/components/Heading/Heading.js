import React from 'react'
import ReactDOM from 'react-dom'
import Landing from "../../views/Landing/Landing";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

function clickHandler() {
    const rootElement = document.getElementById("root");

    ReactDOM.render(
        <ErrorBoundary>
            <Landing />
        </ErrorBoundary>,
        rootElement
    );
}

export default function Heading() {
    return (
        <h1 className="heading"><a href="https://netflix.com" target="_blank">netflix</a>
            <span className="font_thin"><a href="javascript:void(0);" onClick={clickHandler}>roulette</a></span></h1>
    )
}