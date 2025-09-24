import React from "react";
import styles from "./Card.module.css";

function capitalizeFirstLetter(str) {
    if (typeof str !== 'string' || str.length === 0) {
        return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function Card({ image, title, subtitle, description, lifeSpan, species }) {
    return (
        <div className={styles.floatingCard}>
            {image && (
                <img className={styles.cardImage} src={image} alt={title} />
            )}
            <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{title}</h3>
                <h4 className={styles.cardSubtitle}>{subtitle}</h4>
                <p className={styles.cardDescription}>{description}</p>
                {lifeSpan && (
                    <p className={styles.cardLifeSpan}><strong>Life Expectancy:</strong> {lifeSpan}</p>
                )}
                {species && (
                    <span className={styles.cardSpecies}>{capitalizeFirstLetter(species)}</span>
                )}
            </div>
        </div>
    );
}

export default Card;
