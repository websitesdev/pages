import React from 'react'
import styles from "./About.module.scss";
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <h1>WebDesign Concept</h1>
        <h3>Faceți-vă afacerea să strălucească in mediul online cu un site web personalizat, conceput doar pentru dumneavoastra.</h3>
        <Link to="/contact">
            <Button className={styles.buton} />
          </Link>
      
      </div>
    </div>
  )
}

const Button = () => {
  return <button className={styles.button}>Contact</button>;
};


export default About