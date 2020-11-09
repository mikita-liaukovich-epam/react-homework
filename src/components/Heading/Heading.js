import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Heading() {
    const history = useHistory();
    return (
        <h1 className="heading"><a href="https://netflix.com" target="_blank">netflix</a>
            <span className="font_thin"><a href="javascript:void(0);" onClick={() => history.push('/')}>roulette</a></span></h1>
    )
}