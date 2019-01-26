import React, { Component } from 'react'; 
import './App.css';
import './Speech.module.css';
import Speech from './Speech';
import Form from './Form';
import Reset from './Reset';
import Shittalk from './Shittalk';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      outcome: '',
      guesses: {},
      submitted: false,
      computer: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.whoWon = this.whoWon.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.autoWin = this.autoWin.bind(this);
  }

  handleChange = (event) =>{
    this.setState({value: event.target.value.toUpperCase()});
  }
 autoWin( event ) {
   event.preventDefault();
   this.setState({computer: true});
 }
  handleSubmit(event) {
    event.preventDefault();
    let userGuess = this.state.value;
    this.whoWon(userGuess);
    this.setState({submitted: true});
  }
  handleReset( event ) {
    event.preventDefault();
    this.setState({
      value: '',
      outcome: '',
      guesses: {},
      submitted: false,
      computer: false
    })
  }

  whoWon = (user) => {
    const rpsArr = ['ROCK', 'PAPER', 'SCISSORS'];
    const rando = (num) => ((Math.floor(Math.random() * num)));
    const rand3 = rando(3);
    const comp = rpsArr[rand3];
    if(user !== typeof(string)){
      this.setState({outcome: 'Guess cannot be a number'});
    }
    if(user !== 'ROCK' || 'PAPER' || 'SCISSORS'){
      this.setState({outcome: user + ' is not a guess...Check yer spelling brah'})
    }
    if(user === comp){
      this.setState({outcome: 'You Tied!'});
    }
    if((user === 'ROCK' && comp === 'PAPER')||(user === 'PAPER' && comp === 'SCISSORS') || (user === 'SCISSORS' && comp === 'ROCK')){
      this.setState({
        outcome: 'The Computer Won!',
        computer: true});
    }
    if((user === 'ROCK' && comp === 'SCISSORS') || (user === 'PAPER' && comp === 'ROCK') || (user === 'SCISSORS' && comp === 'PAPER')){
        this.setState({outcome: 'You Won!'});
    }
    let guesses = {
      userGuess: user,
      computerGuess: comp
    }
    this.setState({ 
      value: '',
      guesses: guesses
    })
    
  }
  //TODO: make a random array of shit talking phrases the computer can taunt you with when it wins.
  //TODO: style components.
  //TODO: figure out how to deploy react apps to github (do we need any git ignore files?)
  //TODO: render a robot and the <Speech /> component will be a text bubble.
  
  render() {
    const sayings=  [
      ["It looks like I win this time puny feeble human scum"],
      ["Bleep Blop Bloop...Fuck your mother"],
      ["Your reproductive organs are inadiquate bleep bloop"],
      ["Loser face!"],
      ["Neo was a bitch in the Matrix"]
  ]
    const styleLose = {
      border: '2px solid black',
      borderRadius: '10px',
      width: '33.33%',
      marginLeft: '30px'
    }
    const styleWin = {
        background: '#fff',
        color: 'black',
        border: '2px solid black',
        borderRadius: '10px',
        width: '33.33%',
        marginLeft: '30px'
    }
    //I think it's running the submit logic first so adding a boolean once the outcome is determined in order to choose which style is kind of redundant because that shits not getting calculated til after the on submit.
    console.log("1st " + this.state.computer);
    const rando = Math.floor(Math.random() * sayings.length)
    const bubble = this.state.submitted ? 
    [
      <Speech outcome={this.state.outcome} guesses={this.state.guesses} style={this.state.computer ? styleLose : styleWin}/>, 
      <Reset reset={this.handleReset} />
    ]: 
      <Form submitted={this.handleSubmit} value={this.state.value} changed={this.handleChange}/>;
    const shitTalker = this.state.computer ? <Shittalk randomSaying={sayings[rando]} /> : null;
    console.log("2nd " + this.state.computer);
    return (

      <div className="App">
        <h1>Rock, Paper, Scissors</h1> 
        {bubble}
        {shitTalker} 
        <button onClick={this.autoWin}>Auto Win</button>       
      </div>
    );
  }
}

export default App;
