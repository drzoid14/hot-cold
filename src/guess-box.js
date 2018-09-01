import React from 'react';
import './top-bar.css';
import Counter from './counter';
import List from './list'

export default function GuessBox(props) {
   console.log("guessbox list",props.list); 

    return(
        <div className="guess">
            <h2>{props.hotcold}</h2>
            <form onSubmit={props.makeGuess}>
                <input type="text" placeholder="Guess a Number"></input>
                <button  type="submit">Guess</button>
            </form>
            <Counter title={props.title} number={props.number} />
            <div className="spent">
                <List list={props.list}/>
            </div>
        </div>
    )
}