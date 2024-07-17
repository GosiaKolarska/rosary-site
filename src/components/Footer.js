import React, { useState } from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__wrapper}>
          <div className={styles.footer__column}>
            <div className={styles.footer__section}>
              <h3 className={styles.footer__title}>O nas</h3>
              <p className={styles.footer__paragraph}>
                Jesteśmy grupą osób, która regularnie modli się w różnych
                intencjach.
              </p>
            </div>
            <div className={styles.footer__section}>
              <h4 className={styles.footer__subtitle}>Składki</h4>
              <p className={styles.footer__paragraph}>
                32 3144 2322 0000 0000 0000 0341
              </p>
            </div>
            <div className={styles.footer__social}>
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </div>
          <div className={styles.footer__column}>
            <div className={styles.footer__section}>
              <h3 className={styles.footer__title}>Kontakt</h3>
              <a
                className={styles.footer__mail}
                href="mailto:kolo@rozancowe.pl"
              >
                <i className="fa fa-envelope-o" aria-hidden="true"></i>
                kolo@rozancowe.pl
              </a>
            </div>
            <div className={styles.footer__section}>
              <h3 className={styles.footer__title}>Partnerzy</h3>
              <div className={styles.footer__partnerLogoList}>
                <img
                  src="/partnierzy-rozaniec.png"
                  alt="Partner 2"
                  className={styles.footer__partnerLogo}
                />
                <img
                  src="/partnierzy-zywy-rozaniec.png"
                  alt="Partner 3"
                  className={styles.footer__partnerLogo}
                />
                <img
                  src="/partnierzy-dla-dzieci.png"
                  alt="Partner 1"
                  className={styles.footer__partnerLogo}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer__bottomBar}>
          <div className={styles.footer__languageSwitch}>
            <div
              className={styles.footer__languageCurrent}
              onClick={toggleDropdown}
            >
              <img src="/flag-polish.png" alt="Polish Flag" />
              Polski
              <i
                className={`fas fa-chevron-down ${
                  isDropdownOpen ? styles.open : ""
                }`}
              ></i>
            </div>
            {isDropdownOpen && (
              <ul className={styles.footer__languageList}>
                <li className={styles.footer__languageListItem}>
                  <a href="#">
                    <img src="/flag-english.png" alt="English Flag" />
                    English
                  </a>
                </li>
                <li className={styles.footer__languageListItem}>
                  <a href="#">
                    <img src="/flag-german.png" alt="German Flag" />
                    Deutsch
                  </a>
                </li>
              </ul>
            )}
          </div>
          <p className={styles.footer__copy}>
            © 2024 Copyright. <a href="#">Polityka prywatności</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
