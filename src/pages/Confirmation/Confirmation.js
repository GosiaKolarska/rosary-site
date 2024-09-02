import React, { useEffect, useState } from "react";
import Hero from "../../components/Hero";
import styles from "./Confirmation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

const Confirmation = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch the data from the JSON file
    fetch("/data/confirmation.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) =>
        console.error("Error fetching the confirmation data:", error)
      );
  }, []);


  return (
    <div className={styles.confirmation}>
      <Hero title={data.confirmation.title} />
      <div className="container">
        <div className={styles.confirmationContent}>
          <FontAwesomeIcon
            icon={faCircleCheck}
            className={styles.confirmationIcon}
          />

          <div className={styles.confirmationText}>
            <h2 className={styles.confirmationTitle}>
              {data.confirmation.content.text.title}
            </h2>
            <p className={styles.confirmationDescription}>
              {data.confirmation.content.text.description}
            </p>
          </div>
        </div>
        <a
          href={data.confirmation.content.button.link}
          className={styles.confirmationButton}
        >
          {data.confirmation.content.button.text}
        </a>
      </div>
    </div>
  );
};

export default Confirmation;
