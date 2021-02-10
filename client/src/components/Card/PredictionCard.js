import React from 'react';
import styles from './Card.module.css';
import Button from '../Button/Button';

function PredictionCard(props) {

    const {location = '', imgSrc, id, onDetailsClick} = props;
    return (
        <section className={styles.card}>
            <img src={imgSrc} id={id} alt={`${location} Map`}/>
            <div className={styles.details}>
                {location && <h1>{location}</h1>}
                <Button title="Show Details" onClick={onDetailsClick} style={styles.button}/>
            </div>
        </section>
    );
}

export default PredictionCard;
