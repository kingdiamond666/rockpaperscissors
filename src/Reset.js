import React from 'react';

const buttonstyle ={
    background: '#282c34',
    fontFamily: 'Source Code Pro',
    textTransform: 'uppercase',
    color: '#fff',
    borderRadius: '5px',
    border: '2px solid #fff',
    height: '50px',
    width: '100px',
    display: 'block',
    margin: '0 auto 20px auto'
 }
const reset = (props) => (
    <form onSubmit={props.reset}>
          <input type="submit" value="Reset"style={buttonstyle} />
    </form>
)

export default reset;