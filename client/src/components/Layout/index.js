import React from 'react';
import styles from './layout.module.css';

export const Layout = (props) => {

    return (
        <section className={styles.container}>
           <div className={styles.shadow}>
                {props.children}
           </div>
        </section>
    )
};
