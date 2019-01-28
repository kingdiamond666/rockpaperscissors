import React from 'react';
import { Reset, Submit } from './Reset.module.css';

const reset = (props) => (
    <form onSubmit={props.reset} className={ Reset }>
          <input type="submit" value="Reset" className={ Submit } />
    </form>
)

export default reset;