import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import styles from "./HomeCards.module.css";

const cardsData = [
  {
    title: "Różaniec za żonę",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fermentum leo non sapien ullamcorper vulputate. In ullamcorper dui felis.",
    imgSrc: "/group-wife.png",
    buttonText: "Sprawdź sekcję",
    alt: "Praying man",
    color: "#F48B2A",
  },
  {
    title: "Różaniec za męża",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fermentum leo non sapien ullamcorper vulputate. In ullamcorper dui felis.",
    imgSrc: "/group-husband.png",
    buttonText: "Sprawdź sekcję",
    alt: "Praying women",
    color: "#C642DB",
  },
  {
    title: "Różaniec za dzieci",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fermentum leo non sapien ullamcorper vulputate. In ullamcorper dui felis.",
    imgSrc: "/group-kids.png",
    buttonText: "Sprawdź sekcję",
    alt: "Praying kids",
    color: "#70CA61",
  },
  {
    title: "Różaniec za kapłana",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fermentum leo non sapien ullamcorper vulputate. In ullamcorper dui felis.",
    imgSrc: "/group-priest.png",
    buttonText: "Sprawdź sekcję",
    alt: "Praying priest",
    color: "#832AF4",
  },
];

const HomeCards = () => {
  return (
    <section className={styles.cardsSectionSection}>
      <div className="container">
        <div className={styles.cardsSection}>
          <span className={styles.cardsSectionSubtitle}>GRUPY RÓŻAŃCOWE</span>
          <h2 className={styles.cardsSectionTitle}>
            Sprawdź dostępne grupy różańcowe
          </h2>
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
