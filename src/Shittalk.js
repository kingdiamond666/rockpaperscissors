import React from 'react';
import shittalk from './Shittalk.module.css';


const Shittalk = (props) => (
    <div>
        <blockquote className={shittalk.container}>    
            <div className={shittalk.display}>
                <p className={shittalk.code}>{props.randomSaying}... <br/><br/> Love,<br/> ~The Computer</p>
            </div>
        </blockquote>
    </div>
)
export default Shittalk;
