import React from 'react'
import { useDispatch } from 'react-redux'

export default function Heading() {
    const dispatch = useDispatch();
    return (
        <h1 className="heading"><a href="https://netflix.com" target="_blank">netflix</a>
            <span className="font_thin"><a href="javascript:void(0);" onClick={() => dispatch({
                type: 'setState', 
                payload: { 
                    currentView: 'Landing',
                }
            })}>roulette</a></span></h1>
    )
}