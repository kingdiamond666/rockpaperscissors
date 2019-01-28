import React from 'react';
import speechy from './Speechy.module.css';
import Reset from './Reset';

const Speech = (props) => {  
    let speechClass = [speechy.Speechy];
    props.computer ? 
    speechClass.push(speechy.SpeechLose) : speechClass.push(speechy.SpeechWin)

    let guesses = props.wrongGuess ? null: 
        [ 
            <p>You guessed: {props.guesses.userGuess}</p>,
            <p>The computer guessed: {props.guesses.computerGuess}</p>
        ];
    return(  
    <div className={speechClass.join(' ')}>
        <h1>{props.outcome}</h1>
        {guesses}
    </div>
    )}

export default Speech;