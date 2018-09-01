import React from 'react';
import './top-bar.css'

export default function TopBar(props) {

return(
    <div className="top-bar">
        <p onClick={props.explain} className="exp">What?</p>
        <a onClick={props.newGame} className="new-game" href="#">New Game</a>
    </div>
    )
}