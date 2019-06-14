import React from 'react';
import './Button.css';

const button = (props) => (
    <button
        disabled={props.disabled}
        className='Button'
        style={{ color: props.btnType === 'Danger' ? '#944317' : '#5C9210' }}
        onClick={props.clicked}
    >{props.children}</button>
);

export default button;