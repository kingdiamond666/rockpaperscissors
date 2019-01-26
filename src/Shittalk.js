import React from 'react';

const style = {
    background: '#fff',
    color: 'black',
    borderRadius: '30%',
    height: '300px',
    width: '500px',
    display: 'grid',
    alignContent: 'center',
    float: 'right',
    marginRight: '40px'
}

const Shittalk = (props) => (
    <div style={style}>
        <p>{props.randomSaying}</p>
    </div>
)
export default Shittalk;
