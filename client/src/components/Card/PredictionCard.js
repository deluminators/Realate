import React from 'react';
import cardStyles from './Card.module.css';
import Button from '../Button/Button';

function PredictionCard(props) {

    const {location, imgSrc, styles, width = '30%', id, onDetailsClick} = props;
    return (
        <>
            <img src={imgSrc} style={styles} width={width} id={id} alt={`${location ? location : ''} Map`}/>
            <div style={{width}}>
                {location && <h1 className={cardStyles.title}>{location}</h1>}
                <Button title="Show Details" onClick={onDetailsClick} style={cardStyles.details}/>
            </div>
        </>
    );
}

export default PredictionCard;
