import React from 'react';
import styles from './Button.module.css';

function Button(props) {
    return (
        <div className={`${styles.Button} ${props.style}`} onClick={props.onClick}>
            {props.title}
        </div>
    )
}

export default Button
