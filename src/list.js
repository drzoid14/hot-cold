import React from 'react';
import './list.css';

export default function GuessList(props) {
   if(props.list===null){
       return null;
   }
   else{
       console.log("the list is",props.list);
    const guesses = props.list.map((guess, index) => (
      <li key={index}>
        {guess}
      </li>
    ));
  
    return (
      <ul id="guessList" className="guessBox clearfix">
        {guesses}
      </ul>
    );
  }
}