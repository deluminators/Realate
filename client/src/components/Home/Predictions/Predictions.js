import React from 'react';
import PredictionCard from '../../Card/PredictionCard';
import styles from './Predictions.module.css';
import prediction from '../../../assets/Prediction.jpg';

function Predictions() {

    const predictionCardsData = [
        {
            location: 'Staya Nagar, Bhubaneswar',
            imgSrc: prediction,
            onDetailsClick: () => {}
        },
        {
            location: 'Staya Nagar, Bhubaneswar',
            imgSrc: prediction,
            onDetailsClick: () => {}
        },
        {
            location: 'Staya Nagar, Bhubaneswar',
            imgSrc: prediction,
            onDetailsClick: () => {}
        }
    ]

    return (
        <div className={styles.Predictions}>
            <div className={styles.title}>
                Our Predictions
            </div>

            <div className={styles.content}>
                view all predictions
            </div>

            <div className={styles.prediction_card_array}>
                {
                    predictionCardsData.map(({location, imgSrc, onDetailsClick}) => (
                        <PredictionCard
                            location={location}
                            imgSrc={imgSrc}
                            onDetailsClick={onDetailsClick}
                            key={Math.random()}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Predictions
