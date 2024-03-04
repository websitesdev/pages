import React, { useState } from "react";
import styles from "./Header.module.scss";
import { BiMenuAltRight } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";
import logo from "../images/logo-transparent-png.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggler = () => setMenuOpen((p) => !p);

  return (
    <div className={styles.header}>
      <div className={styles.header_content}>
        <div>
          <img className={styles.logo} src={logo} alt="Creare web site pentru firme, portofoliu personal, website prezentare si blog" />
        </div>
        <div>
          <nav
            className={`${styles.nav} ${menuOpen ? styles[`nav--open`] : {}}`}
          >
            <Link to="/" className={styles.nav_item} id="homepage">
              Acasa
            </Link>
            <Link to="/aboutus" className={styles.nav_item} id="aboutus">
              Despre
            </Link>
            <Link to="/ourservice" className={styles.nav_item} id="servicii">
              Servicii
            </Link>
            <Link to="/portfolio" className={styles.nav_item} id="portofoliu">
              Portofoliu
            </Link>
            <a href="tel:+40729436992" className={styles.nav_item}>
              +40729436992
            </a>
            <Link to="/contact">
            <Button className={styles.header_button_container} />
          </Link>
          </nav>
           
      
        </div>
        <div>
        
          <div className={styles.header_toggler} onClick={menuToggler}>
            {!menuOpen ? <BiMenuAltRight /> : <IoCloseOutline/>}
          </div>
        </div>
      </div>
    </div>
  );
};

const Button = () => {
  return <button className={styles.button}>Contact</button>;
};

export default Header;
