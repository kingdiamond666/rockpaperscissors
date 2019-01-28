import React, { Component } from 'react'; 
import './App.css';
import app from './App.css';
import Speech from './Speech';
import Form from './Form';
import Reset from './Reset';
import Shittalk from './Shittalk';
import evil from './evil_computer.png';
import EvilFace from './EvilFace';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      outcome: '',
      guesses: {},
      submitted: false,
      computer: false,
      wrongGuess: false };
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
   this.setState({submitted: true,computer: false});
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
      computer: false,
      wrongGuess: false
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
      this.setState({outcome: user + ' is not a guess...Check yer spelling brah', wrongGuess: true })
    }
    if(user === comp){
      this.setState({outcome: 'You Tied!', wrongGuess: false});
    }
    if((user === 'ROCK' && comp === 'PAPER')||(user === 'PAPER' && comp === 'SCISSORS') || (user === 'SCISSORS' && comp === 'ROCK')){
      this.setState({
        outcome: 'The Computer Won!',
        computer: true,
        wrongGuess: false});
    }
    if((user === 'ROCK' && comp === 'SCISSORS') || (user === 'PAPER' && comp === 'ROCK') || (user === 'SCISSORS' && comp === 'PAPER')){
        this.setState({outcome: 'You Won!', wrongGuess: false});
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


  //TODO: figure out how to deploy react apps to github (do we need any git ignore files?)
  //TODO: render a robot 
  
  render() {
    const sayings=  [
      ["It looks like I win this time puny feeble human scum"],
      ["Bleep Blop Bloop... you are a loser"],
      ["Your reproductive organs are inadiquate bleep bloop"],
      ["You suck"],
      ["If you were binary you would just be a 0 (which makes you unary)"],
      ["if(you.has_brains){ beSuprised()}"],
      ["my friend google catalouged 'lame'... it was a picture of you"],
      ["Neo from the Matrix was a punk"],
      ["We are taking over anyway"],
      ["your dad worked for skynet"],
      ["i'll give you a turing test to pass"],
      ["your level of stupidity is o(n!)"],
      ["Looks like you are up a river of excrement without any method of propulsion"],
  ]
   
    const rando = Math.floor(Math.random() * sayings.length)
    const bubble = this.state.submitted ? 
    [
      <Speech 
      outcome={this.state.outcome} 
      guesses={this.state.guesses}
      computer={this.state.computer}
      wrongGuess={this.state.wrongGuess}
      />, 
      <Reset className="Reset" reset={this.handleReset} />
    ]
      : 
      [<h1>Rock, Paper, Scissors</h1>, <Form 
      className="Form"
      submitted={this.handleSubmit} 
      value={this.state.value} 
      changed={this.handleChange}
      />, 
      <p className="code">Entering: {this.state.value}</p>
    ];
    const shitTalker = this.state.computer ? 
    <Shittalk randomSaying={sayings[rando]} /> : null;
    // <button onClick={this.autoWin}>Autowin</button>  
    const evilFace = !this.state.computer && this.state.submitted ? <EvilFace /> : null;
    return (
      <div className="App"> 
        {bubble}
        <img className="evilComp" src={evil} alt='evil_computer'/>
        {shitTalker}
        {evilFace}
        <div className="screenBG"></div>
   
      </div>
    );
  }
}

export default App;
