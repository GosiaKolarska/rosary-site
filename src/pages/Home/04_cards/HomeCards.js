import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import styles from "./HomeCards.module.css";

const HomeCards = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetch("/data/home.json")
      .then((response) => response.json())
      .then((data) => setContent(data.cards))
      .catch((error) => console.error("Error loading content:", error));
  }, []);

  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    <section className={styles.cardsSectionSection}>
      <div className="container">
        <div className={styles.cardsSection}>
          <span className={styles.cardsSectionSubtitle}>GRUPY RÓŻAŃCOWE</span>
          <h2 className={styles.cardsSectionTitle}>
            Sprawdź dostępne grupy różańcowe
          </h2>
          <div className={styles.cards}>
            {content.map((card, index) => (
              <div
                key={index}
                className={`${styles.card} ${
                  index % 2 === 0 ? styles.cardImageRight : styles.cardImageLeft
                }`}
              >
                <img
                  src={card.imgSrc}
                  alt={card.alt}
                  className={styles.image}
                />
                <div className={styles.cardItemContent}>
                  <h3
                    className={styles.cardItemTitle}
                    style={{ color: card.color }}
                  >
                    {card.title}
                  </h3>
                  <p className={styles.cardItemParagraph}>{card.description}</p>
                  <button
                    className={styles.cardItemButton}
                    style={{ backgroundColor: card.color }}
                  >
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    {card.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCards;
