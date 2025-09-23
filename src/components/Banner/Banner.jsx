import React from 'react'
import styles from './Banner.module.css'

function Banner() {
    return (
        <div className={styles.container}>
            <img src="/DogBanner.png" alt="DogBanner"/>
            <p className={styles.mainText}>Animal breeds were made to be predictable!</p>
            <p className={styles.secondText}>Discover everything about dog or cat breeds and how to care for them.</p>
        </div>
    )
}

export default Banner
