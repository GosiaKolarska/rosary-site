import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "./GroupsSection.module.css";

const GroupsSection = ({ groups, onJoinClick, direction }) => (
  <div className={styles.groupsSection}>
    <h2 className={styles.groupsSectionTitle}>Dostępne grupy</h2>
    <div className={styles.groups} style={{ flexDirection: direction }}>
      {groups.map((group) => (
        <div key={group.title} className={styles.groupCard}>
          <img src={group.imgSrc} alt={group.alt} className={styles.image} />
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>{group.title}</h3>
            {onJoinClick && (
              <button
                className={styles.cardButton}
                onClick={() => onJoinClick(group)}
              >
                <FontAwesomeIcon icon={faPlus} />
                {group.buttonText}
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default GroupsSection;
