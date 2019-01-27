import React from 'react';
import shittalk from './Shittalk.module.css';


const Shittalk = (props) => (
    <div>
        <blockquote className={shittalk.Bubble}>    
            <div>
                <p className={shittalk.Inner}>{props.randomSaying}</p>
            </div>
        </blockquote>
        <p>Computer</p>
    </div>
)
export default Shittalk;
