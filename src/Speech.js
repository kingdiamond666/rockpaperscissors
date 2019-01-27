import React from 'react';
import speechy from './Speechy.module.css';

const Speech = (props) => {  
    let speechClass = [speechy.Speechy];
    props.computer ? 
    speechClass.push(speechy.SpeechLose) : speechClass.push(speechy.SpeechWin)

    return(  
    <div className={speechClass.join(' ')}>
        <h1>{props.outcome}</h1>
        <p>You guessed: {props.guesses.userGuess}</p>
        <p>The computer guessed: {props.guesses.computerGuess}</p>
    </div>
    )}

export default Speech;