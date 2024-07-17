import React from "react";
import { Link } from "react-router-dom";
import styles from "./GroupsCTA.module.css";

const GroupsCTA = () => {
  return (
    <section className={styles.checkOtherGroupsSection}>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h2 className={styles.heading}>Sprawdź inne nasze grupy</h2>
          <p className={styles.description}>
            Podoba ci się nasza inicjatywa? Sprawdź inne nasze grupy różańcowe i
            rekomenduj je przyjaciołom i znajomym!
          </p>
          <div className={styles.buttons}>
            <Link
              to="/groups/children"
              className={`${styles.button} ${styles.children}`}
            >
              Dla dzieci
            </Link>
            <Link
              to="/groups/priests"
              className={`${styles.button} ${styles.priests}`}
            >
              Dla kapłanów
            </Link>
            <Link
              to="/groups/wives"
              className={`${styles.button} ${styles.wives}`}
            >
              Dla żon
            </Link>
          </div>
        </div>
        <div className={styles.imageContent}>
          <img
            src={`${process.env.PUBLIC_URL}/logo.png`}
            alt="Logo"
            className={styles.logo}
          />
        </div>
      </div>
    </section>
  );
};

export default GroupsCTA;
