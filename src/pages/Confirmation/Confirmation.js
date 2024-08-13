import React from "react";
import Hero from "../../components/Hero";
import styles from "./Confirmation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

const Confirmation = () => {
  return (
    <div className={styles.confirmation}>
      <Hero title="Potwierdzenie" />
      <div className="container">
        <div className={styles.confirmationContent}>
          <FontAwesomeIcon
            icon={faCircleCheck}
            className={styles.confirmationIcon}
          />

          <div className={styles.confirmationText}>
            <h2 className={styles.confirmationTitle}>
              Dziękujemy za potwierdzenie uczestnictwa!
            </h2>
            <p className={styles.confirmationDescription}>
              Pomaga nam to utrzymać aktywność wśród członków, następne
              powiadomienie otrzymasz za 60 dni.
            </p>
          </div>
        </div>
        <a href="/" className={styles.confirmationButton}>
          Wróć na portal
        </a>
      </div>
    </div>
  );
};

export default Confirmation;
