import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Menu.module.css";

const Menu = () => {
  const [menuData, setMenuData] = useState(null);
  const location = useLocation();
  const isRulesPage = location.pathname === "/rules";

  useEffect(() => {
    // Fetch the menu data from the JSON file
    fetch("/data/menu.json")
      .then((response) => response.json())
      .then((data) => setMenuData(data))
      .catch((error) => console.error("Error fetching the menu data:", error));
  }, []);

  if (!menuData) {
    return <div>Loading...</div>;
  }

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
              src={`${process.env.PUBLIC_URL}${menuData.menu.logo.src}`}
              alt={menuData.menu.logo.alt}
              className={styles.logo}
            />
          </a>
          <ul className={styles.navLinks}>
            {menuData.menu.navLinks.map((link, index) => (
              <li key={index} className={link.dropdown ? styles.dropdown : ""}>
                <Link
                  to={link.link}
                  className={link.dropdown ? styles.dropdownLink : ""}
                >
                  {link.label}
                  {link.dropdown && (
                    <i
                      className={`${styles.dropdownLinkIcon} fas fa-chevron-down`}
                    ></i>
                  )}
                </Link>
                {link.dropdown && (
                  <ul className={styles.dropdownContent}>
                    {link.dropdown.map((dropdownLink, dropdownIndex) => (
                      <li key={dropdownIndex}>
                        <Link to={dropdownLink.link}>{dropdownLink.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.authButtons}>
          {menuData.menu.authButtons.map((button, index) => (
            <Link key={index} to={button.link} className={styles[button.class]}>
              {button.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Menu;
