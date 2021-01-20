import React from 'react';
import styles from './Button.module.css';

function Button(props) {
    return (
        <button className={`${styles.Button} ${props.style}`} onClick={props.onClick}>
            {props.title}
        </button>
    )
}

export default Button
