import React from 'react';
import styles from './Layout.module.css';

function Layout(props) {

    return (
        <section className={styles.container}>
            {props.children}
        </section>
    );
}

export default Layout;
