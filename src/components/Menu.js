import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Menu.module.css";

const Menu = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isRulesPage = location.pathname === "/rules";

  return (
    <nav
      className={`${styles.menu} ${
        isRulesPage ? styles.rulesBackground : "yes"
      }`}
    >
      <div className={styles.container}>
        <div className={styles.logoMenuWrapper}>
          <a href="/">
            <img
              src={`${process.env.PUBLIC_URL}/logo.png`}
              alt="Logo"
              className={styles.logo}
            />
          </a>
          <ul className={styles.navLinks}>
            <li>
              <Link to="/">Strona główna</Link>
            </li>
            <li>
              <Link to="/rules">Zasady</Link>
            </li>
            <li className={styles.dropdown}>
              <Link to="/groups" className={styles.dropdownLink}>
                Grupy{" "}
                <i
                  className={`${styles.dropdownLinkIcon} fas fa-chevron-down`}
                ></i>
              </Link>
              <ul className={styles.dropdownContent}>
                <li>
                  <Link to="/groups/husbands">Za mężów</Link>
                </li>
                <li>
                  <Link to="/groups/children">Za dzieci</Link>
                </li>
                <li>
                  <Link to="/groups/priests">Za kapłanów</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className={styles.authButtons}>
          <Link to="/register" className={styles.joinButton}>
            Przyłącz się
          </Link>
          <Link to="/login" className={styles.loginLink}>
            Zaloguj się
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
