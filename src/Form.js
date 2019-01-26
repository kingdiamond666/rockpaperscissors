import React from 'react';
const style = {
    background: '#282c34',
    color: '#fff',
    borderRadius: '5px',
    border: '2px solid #fff',
    height: '50px',
    width: '100px',
    display: 'block',
    margin: '0 auto 20px auto'
}
const form = (props) => (
    <form onSubmit={props.submitted}>
          <label>Choose Your Fate Puny Human: 
            <input type="text" value={props.value} onChange={props.changed}style={{display:'block', margin: '20px auto'}}></input>
            <input type="submit"  value="Submit" style={style} />
          </label>
    </form>
)

export default form;