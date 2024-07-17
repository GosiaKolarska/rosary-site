import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Hero from "../../../components/Hero";
import styles from "./PanelHome.module.css";

const groupsData = [
  {
    title: "Różaniec za żonę",
    imgSrc: "/group-wife.png",
    buttonText: "Dołącz",
    alt: "Praying man",
    color: "#F48B2A",
  },
  {
    title: "Różaniec za męża",
    imgSrc: "/group-husband.png",
    buttonText: "Dołącz",
    alt: "Praying woman",
    color: "#C642DB",
  },
  {
    title: "Różaniec za dzieci",
    imgSrc: "/group-kids.png",
    buttonText: "Dołącz",
    alt: "Praying kids",
    color: "#70CA61",
  },
  {
    title: "Różaniec za kapłana",
    imgSrc: "/group-priest.png",
    buttonText: "Dołącz",
    alt: "Praying priest",
    color: "#832AF4",
  },
];

const PanelHome = () => {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [remainingGroups, setRemainingGroups] = useState(groupsData);

  const handleJoinClick = (group) => {
    setSelectedGroup(group);
    setRemainingGroups(groupsData.filter((g) => g !== group));
  };

  const handleBackClick = () => {
    setSelectedGroup(null);
    setRemainingGroups(groupsData);
  };

  return (
    <div>
      <Hero title="Panel użytkownika" />
      <div className="container">
        {selectedGroup ? (
          <div className={styles.expandedView}>
            <div className={styles.groupDetail}>
              <img
                src={selectedGroup.imgSrc}
                alt={selectedGroup.alt}
                className={styles.image}
              />
              <h3
                className={styles.cardTitle}
                style={{ color: selectedGroup.color }}
              >
                {selectedGroup.title}
              </h3>
              <p className={styles.cardDescription}>
                {selectedGroup.description}
              </p>
              <button
                className={styles.cardButton}
                style={{ backgroundColor: selectedGroup.color }}
              >
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                Potwierdź uczestnictwo
              </button>
              <p className={styles.cardDetailInfo}>
                Uczestnictwo odnawia się co 60 dni <br />
                14 z 20 członków potwierdziło modlitwę
              </p>
              <h4 className={styles.intentionTitle}>Intencja na Maj 2024</h4>
              <p className={styles.intentionDescription}>
                O docenienie daru różnorodności w Kościele
              </p>
              <p className={styles.intentionText}>
                Módlmy się do Ducha Świętego, aby pomógł nam rozeznać dary
                różnych charyzmatów we wspólnotach chrześcijańskich i odkryć
                bogactwo wielu tradycji liturgicznych wewnątrz Kościoła.
              </p>
              <div className={styles.prayerList}>
                <p>Modlitwa za:</p>
                <div className={styles.prayerNames}>
                  José, Bruno, Luiza, Lara, Laura, Camila, Thiago, Vinícius,
                  Pedro, Felipe, Eduarda, Sofia, Maria Luiza, Amanda, Rafael,
                  Davi, Gabriel, Gustavo, Vitor, Francisco, Giovanni
                </div>
              </div>
              <div className={styles.additionalSettings}>
                <a href="#" className={styles.settingsLink}>
                  Ustawienia powiadomień
                </a>
                <a href="#" className={styles.settingsLink}>
                  Dodatkowe ustawienia
                </a>
              </div>
            </div>
            <div className={styles.groupsSection} style={{ maxWidth: "300px" }}>
              {remainingGroups.map((group) => (
                <div
                  key={group.title}
                  className={styles.groupCard}
                  style={{ width: "100%" }}
                >
                  <img
                    src={group.imgSrc}
                    alt={group.alt}
                    className={styles.image}
                  />
                  <div className={styles.cardContent}>
                    <h3
                      className={styles.cardTitle}
                      style={{ color: group.color }}
                    >
                      {group.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className={styles.groupsSection}>
            <h2 className={styles.groupsSectionTitle}>Dostępne grupy</h2>
            <div className={styles.groups}>
              {groupsData.map((group, index) => (
                <div
                  key={group.id}
                  className={`${styles.groupCard} ${
                    index % 2 === 0
                      ? styles.groupCardImageRight
                      : styles.groupCardImageLeft
                  }`}
                >
                  <img
                    src={group.imgSrc}
                    alt={group.alt}
                    className={styles.image}
                  />
                  <div className={styles.cardContent}>
                    <h3
                      className={styles.cardTitle}
                      style={{ color: group.color }}
                    >
                      {group.title}
                    </h3>
                    <button
                      className={styles.cardButton}
                      style={{ backgroundColor: group.color }}
                      onClick={() => handleJoinClick(group)}
                    >
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                      {group.buttonText}
                    </button>
                  </div>
                  <div
                    className={`${styles.cardFade} ${
                      index % 2 === 0
                        ? styles.cardFadeRight
                        : styles.cardFadeLeft
                    }`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PanelHome;
