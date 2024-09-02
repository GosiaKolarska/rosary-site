import React, { useEffect, useState } from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const [footerData, setFooterData] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    fetch("/data/footer.json")
      .then((response) => response.json())
      .then((data) => setFooterData(data))
      .catch((error) =>
        console.error("Error fetching the footer data:", error)
      );
  }, []);

  if (!footerData) {
    return <div>Loading...</div>;
  }

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__wrapper}>
          <div className={styles.footer__column}>
            <div className={styles.footer__section}>
              <h3 className={styles.footer__title}>{footerData.about.title}</h3>
              <p className={styles.footer__paragraph}>
                {footerData.about.description}
              </p>
            </div>
            <div className={styles.footer__section}>
              <h4 className={styles.footer__subtitle}>
                {footerData.contributions.title}
              </h4>
              <p className={styles.footer__paragraph}>
                {footerData.contributions.accountNumber}
              </p>
            </div>
            <div className={styles.footer__social}>
              {footerData.social.map((socialItem, index) => (
                <a key={index} href={socialItem.link}>
                  <i className={socialItem.iconClass}></i>
                </a>
              ))}
            </div>
          </div>
          <div className={styles.footer__column}>
            <div className={styles.footer__section}>
              <h3 className={styles.footer__title}>
                {footerData.contact.title}
              </h3>
              <a
                className={styles.footer__mail}
                href={`mailto:${footerData.contact.email}`}
              >
                <i className="fa fa-envelope-o" aria-hidden="true"></i>
                {footerData.contact.email}
              </a>
            </div>
            <div className={styles.footer__section}>
              <h3 className={styles.footer__title}>
                {footerData.partners.title}
              </h3>
              <div className={styles.footer__partnerLogoList}>
                {footerData.partners.logos.map((logo, index) => (
                  <img
                    key={index}
                    src={logo.src}
                    alt={logo.alt}
                    className={styles.footer__partnerLogo}
                  />
                ))}
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
              <img
                src={footerData.languageSwitcher.currentLanguage.flagSrc}
                alt={footerData.languageSwitcher.currentLanguage.label}
              />
              {footerData.languageSwitcher.currentLanguage.label}
              <i
                className={`fas fa-chevron-down ${
                  isDropdownOpen ? styles.open : ""
                }`}
              ></i>
            </div>
            {isDropdownOpen && (
              <ul className={styles.footer__languageList}>
                {footerData.languageSwitcher.languages.map(
                  (language, index) => (
                    <li key={index} className={styles.footer__languageListItem}>
                      <a href="#">
                        <img src={language.flagSrc} alt={language.label} />
                        {language.label}
                      </a>
                    </li>
                  )
                )}
              </ul>
            )}
          </div>
          <p className={styles.footer__copy}>
            {footerData.footerBottom.copyrightText}{" "}
            <a href={footerData.footerBottom.privacyPolicyLink}>
              Polityka prywatności
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
