import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faBell,
  faGear,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
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
            <div className={styles.expandedViewGroupDetail}>
              <h2 className={styles.expandedViewGroupDetailTitle}>
                Aktywne grupy
              </h2>
              <div className={styles.groupDetail}>
                <h3 className={styles.cardTitle}>{selectedGroup.title}</h3>
                <button className={styles.cardButton}>
                  <FontAwesomeIcon icon={faCheck} />
                  Potwierdź uczestnictwo
                </button>
                <p className={styles.cardDetailInfo}>
                  Uczestnictwo odnawia się co 60 dni
                </p>
                <div className={styles.cardDetailConfirmationNumber}>
                  <div className={styles.cardDetailConfirmationNumberCounter}>
                    <FontAwesomeIcon
                      icon={faCheck}
                      lassName={styles.cardDetailConfirmationCheckIcon}
                    />
                    <span>14</span>z<span>20</span>
                  </div>
                  <div className={styles.cardDetailConfirmationNumberTitle}>
                    członków potwierdziło modlitwę
                  </div>
                </div>
                <div className={styles.intentionSection}>
                  <h4 className={styles.intentionTitle}>
                    Intencja na Maj 2024
                  </h4>
                  <p className={styles.intentionDescription}>
                    O docenienie daru różnorodności w Kościele
                  </p>
                  <p className={styles.intentionText}>
                    Módlmy się do Ducha Świętego, aby pomógł nam rozeznać dary
                    różnych charyzmatów we wspólnotach chrześcijańskich i odkryć
                    bogactwo wielu tradycji liturgicznych wewnątrz Kościoła.
                  </p>
                </div>
                <div className={styles.prayerList}>
                  <h3 className={styles.prayerListTitle}>Modlitwa za:</h3>
                  <div className={styles.prayerNames}>
                    <span>José</span>
                    <span>Bruno</span>
                    <span>Luiza</span>
                    <span>Lara</span>
                    <span>Laura</span>
                    <span>Camila</span>
                    <span>Camila</span>
                    <span>Thiago</span>
                    <span>Vinícius</span>
                    <span>Pedro</span>
                    <span>Felipe</span>
                    <span>Eduarda</span>
                    <span>Sofia</span>
                    <span>Maria</span>
                    <span>Rafael</span>
                    <span>José</span>
                    <span>Bruno</span>
                    <span>Luiza</span>
                    <span>Lara</span>
                    <span>Laura</span>
                  </div>
                </div>
                <div className={styles.additionalSettings}>
                  <a href="#" className={styles.settingsLink}>
                    <FontAwesomeIcon icon={faBell} />
                    Ustawienia powiadomień
                  </a>
                  <a href="#" className={styles.settingsLink}>
                    <FontAwesomeIcon icon={faGear} />
                    Dodatkowe ustawienia
                  </a>
                </div>
              </div>
            </div>
            <GroupsSection
              className={styles.groupSectionExpanded}
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
