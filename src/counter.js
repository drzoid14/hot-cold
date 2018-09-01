import React from 'react';
import './counter.css';

export default function Counter(props) {

    return (
        <div className="counter">
            <h3>{props.title}</h3>
            <h3 className="number">{props.number}</h3>
        </div>
    )
}