import React from 'react'
import styles from './Banner.module.css'

function Banner() {
    return (
        <div className={styles.container}>
            <img src="/DogBanner.png" alt="DogBanner"/>
            <h2 className={styles.mainText}>Animal breeds were made to be predictable!</h2>
            <p className={styles.secondText}>Discover everything about dog or cat breeds and how to care for them.</p>
        </div>
    )
}

export default Banner
