import React from 'react';
import styles from './Predictions.module.css';

function Predictions() {
    return (
        <div className={styles.Predictions}>
            <div className={styles.title}>
                Our Predictions
            </div>

            <div className={styles.content}>
                view all predictions
            </div>

            <div className={styles.prediction_card_array}>
                {/* Array of Prediction Cards */}
            </div>
        </div>
    )
}

export default Predictions
