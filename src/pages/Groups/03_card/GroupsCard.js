import React from "react";
import styles from "./GroupsCard.module.css";

const cardsData = [
  {
    title: "Czym jest modliwa różańcowa?",
    description:
      "Modlitwa różańcowa jest syntezą naszej wiary, podporą naszej nadziei, żarem naszej miłości. Jest to najpiękniejsza modlitwa, której nauczyła nas sama Matka Najświętsza.",
    imgSrc: "/group-wife.png",
    alt: "Praying man",
    color: "#F48B2A",
  },
];

const GroupsCard = () => {
  return (
    <section className={styles.cardsSectionSection}>
      <div className="container">
        <div className={styles.cardsSection}>
          <div className={styles.cards}>
            {cardsData.map((card, index) => (
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupsCard;
