import React from 'react';
import Form from './Form.module.css';

const form = (props) => (
    <form className="Form" onSubmit={props.submitted}>
          <label>Choose Your Fate Puny Human: 
            <input type="text" value={props.value} onChange={props.changed} className={Form.Form}></input>
            <input type="submit"  value="Submit" className={Form.FormSubmit} />
          </label>
    </form>
)

export default form;