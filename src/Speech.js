import React from 'react';



const speech = (props) => (
    <div>
        <h1>{props.outcome}</h1>
        <p>The computer guessed: {props.guesses.computerGuess}</p>
        <p>You guessed: {props.guesses.userGuess}</p>
    </div>
)

export default speech;