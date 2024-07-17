import React from "react";
import styles from "./GroupsCardList.module.css";

const cardsData2 = [
  {
    title: "Dobra rada",
    description:
      "Warto poinformować żonę o intencji w której uczestnik się modli. W czasie gdy jest dobrze wzmacnia to miłość małżonków, a w czasie gdy jest gorzej pomaga to tę miłość utrzymać.",
    imgSrc: "/card-group1.png",
    alt: "Praying man",
    color: "#F48B2A",
  },
  {
    title: "Akt zawierzenia",
    description:
      "Co roku 8 grudnia staramy się być w kościele i ponowić nasz Akt Zawierzenia w łączności duchowej ze wszystkimi uczestnikami grupy różańcowej.",
    imgSrc: "/card-group2.png",
    alt: "Praying man",
    color: "#F48B2A",
  },
];

const GroupsCardList = () => {
  return (
    <section className={styles.cardsSectionSection}>
      <div className="container">
        <div className={styles.cardsSection}>
          <div className={styles.cards}>
            {cardsData2.map((card, index) => (
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

export default GroupsCardList;
