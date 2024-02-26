import React from "react";
import styles from "./Footer.module.scss";
import logo from "../images/logo-transparent-png.png";
import {
    FaInstagram,
  } from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_content}>
        <div className={styles.left}>
          <img className={styles.logo} src={logo} alt="Site web pentru prezentare firme, portofoliu si blog" />
          <p>
            Ne angajăm să creăm spații digitale captivante care rezonează cu
            publicul tău.
          </p>
        </div>
        <div className={styles.center}>
          <p>Link-uri</p>
          <nav className={styles.links}>
            <Link to='/' className={styles.nav_item}>
              Acasa
            </Link>
            <Link to='/blog' className={styles.nav_item}>
              Blog
            </Link>
            <Link to='/aboutus' className={styles.nav_item} id="aboutus">
              Despre
            </Link>
            <Link to='/ourservice' className={styles.nav_item}>
              Servicii
            </Link>
            <Link to='/portfolio' className={styles.nav_item}>
              Portofoliu
            </Link>
          </nav>
        </div>

        <div className={styles.right}>
        <p>Contact</p>
          <nav className={styles.links}>
           
            <a className={styles.nav_item} href={"/"}>
              +40729436991
            </a>
            <a className={styles.nav_item} href={"/"}>
              contact@websiteconcept.ro
            </a>
            <a className={styles.nav_item} href={"/"}>
            <FaInstagram className={styles.instagram}/>
            </a>
            
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;
