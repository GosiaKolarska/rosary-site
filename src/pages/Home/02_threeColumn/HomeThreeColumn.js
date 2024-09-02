import React, { useEffect, useState } from "react";
import styles from "./HomeThreeColumn.module.css";

const HomeThreeColumn = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetch("/data/home.json")
      .then((response) => response.json())
      .then((data) => setContent(data.threeColumn))
      .catch((error) => console.error("Error loading content:", error));
  }, []);

  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    <section className={styles.threeColSection}>
      <div className="container">
        <div className={styles.threeCol}>
          {content.columns.map((column, index) => (
            <div key={index} className={styles.column}>
              <i className={`${column.icon} ${styles.icon}`}></i>
              <h3>{column.title}</h3>
              <p>{column.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeThreeColumn;
