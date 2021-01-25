import React from 'react';
import Button from '../../Button/Button';
import styles from './Main.module.css';
import Logo from '../../../assets/Logo.png';

function Main() {
    return (
        <main className={styles.Main}>
            <img src={Logo} alt="Logo" className={styles.logo}/>

            <div className={styles.title}>
                Real-time real-estate data prediction engine
            </div>

            <div className={styles.content}>
                Predict and Detect land quality & cover, its optimal usage for building flats or property, its generative model and optimal paths to electric/water/sewage reserve.
            </div>

            <div className={styles.services}>

                <div className={styles.service}>
                    <div className={styles.service_title}>Request for Inspection</div>
                    <Button title="Request" style={styles.service_button}/>
                </div>

                <div className={styles.service}>
                    <div className={styles.service_title}>Upload Land Image</div>
                    <Button title="Upload" style={styles.service_button}/>
                </div>

            </div>
        </main>
    )
}

export default Main
