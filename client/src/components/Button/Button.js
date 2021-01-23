import React from 'react';
import styles from './Button.module.css';

function Button({style, onClick, title}) {
    return (
        <button className={`${styles.Button} ${style}`} onClick={onClick}>
            {title}
        </button>
    )
}

export default Button
