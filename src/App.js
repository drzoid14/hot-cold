import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopBar from './top-bar';
import GuessBox from './guess-box'

class App extends Component {
constructor(props){
  super(props);

  this.state={
    title: "Guess#",
    number: 0,
    correct: Math.floor(Math.random()*100),
    guesses:[],
    guess: null,
    hotcold: null
  }

}



makeGuess(e){
console.log("making a guess")
e.preventDefault();
const current=e.target.querySelector('input').value;
const distance=Math.abs(current-this.state.correct)
if(distance===0){
  console.log("Hooray You Win")
  this.setState({
    hotcold:`VICTORY IS YOURS in ${this.state.number} guesses`
  })
} else
if(distance<=5){
  this.setState({
    hotcold:"Super Hot"
  })
  console.log("Super Hot")
} else
if(distance<=10) {
  console.log("Warm")
  this.setState({
    hotcold:"Warm"
  })
} else {
  this.setState({
    hotcold:"Cold"
  })
  console.log("cold...")
}

this.setState({
  guess: current,
  guesses: this.state.guesses.concat(current),
  number: this.state.number+1
});



console.log(this.state);
}

newGame(){
console.log("starting a new game")
}

explain() {
  alert("Guess a number 1-100, we will guide you")


} 

  render() {

    console.log("app list",this.state.guesses);
    return (
      
      <div className="App">
        <TopBar explain={e=>this.explain(e)} newGame={e=>this.newGame(e)}/>
        <GuessBox list={this.state.guesses} hotcold={this.state.hotcold} title={this.state.title} number={this.state.number}
          makeGuess={e=>this.makeGuess(e)}/>
      </div>
    );
  }
}

export default App;
