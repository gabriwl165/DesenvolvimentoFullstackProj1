import React from "react";
import styles from "./Footer.module.css";

function Footer() {

    return(
        <footer className={styles.footer}>
            <div className={styles.mainContainer}>
                <h2 className={styles.title}>PetCare Tips</h2>
                <p className={styles.rights}>© 2024 PetCare Tips</p>
            </div>
            <div className={styles.contactContainer}>
                <h2 className={styles.contact}> Bruna Naian </h2>
                <h2 className={styles.contact}> Vinicius Neia </h2>
                
            </div>
        </footer>
    );
}

export default Footer;