import React from 'react'
import styles from "./AboutUS.module.scss";
import image2 from '../images/2.png';

const AboutUS = () => {
    return (
        <div className={styles.about_us}>
            <div className={styles.about_left}>
                <img src={image2} alt="Creare website pentru firme din diverse domenii, realizare portofoliu, creare landing page si blog" />

            </div>
            <div className={styles.about_right}>
                <h1>Despre</h1>
                <p>Incepe prin a defini ideea websiteului tau plecand de la un concept de baza!<br/>
                Ne angajăm să creăm spații digitale captivante care rezonează cu publicul tău.
                </p>
            
            </div>

        </div>
    )
}

export default AboutUS