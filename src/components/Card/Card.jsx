import React from "react";
import styles from "./Card.module.css";

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
                    <p className={styles.cardLifeSpan}><strong>Expectativa de vida:</strong> {lifeSpan}</p>
                )}
                {species && (
                    <span className={styles.cardSpecies}>{species}</span>
                )}
            </div>
        </div>
    );
}

export default Card;
