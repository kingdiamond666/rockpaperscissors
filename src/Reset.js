import React from 'react';


const style = {  

}
const buttonstyle ={
    backgroundColor: '#fff',
    width: '20%',
    height: '20px',
    color: 'black',
    border: '2px solid black',
    borderRadius: '2%',
 }
const reset = (props) => (
    <form onSubmit={props.reset} style={style}>
          <input type="submit" value="Reset"style={buttonstyle} />
    </form>
)

export default reset;