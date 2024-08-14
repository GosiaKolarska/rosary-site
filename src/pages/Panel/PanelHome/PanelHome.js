import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Hero from "../../../components/Hero";
import GroupsSection from "./GroupsSection";
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

  return (
    <div className={styles.panelHome}>
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
                <FontAwesomeIcon icon={faPlus} />
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
            <GroupsSection
              groups={remainingGroups}
              onJoinClick={handleJoinClick}
            />
          </div>
        ) : (
          <GroupsSection
            groups={remainingGroups}
            onJoinClick={handleJoinClick}
          />
        )}
      </div>
    </div>
  );
};

export default PanelHome;
