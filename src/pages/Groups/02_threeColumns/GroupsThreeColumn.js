import React from "react";
import styles from "./GroupsThreeColumn.module.css";

const GroupsThreeColumn = () => {
  return (
    <section className={styles.threeColSection}>
      <div className="container">
        <div className={styles.threeCol}>
          <div className={styles.column}>
            <i className={`fas fa-hand-holding-heart ${styles.icon}`}></i>
            <h3>Duchowe wsparcie</h3>
            <p>
              Grupa różańcowa oferuje wsparcie duchowe od innych członków,
              wzmacniając Twoją wiarę i poczucie wspólnoty.
            </p>
          </div>
          <div className={styles.column}>
            <i className={`fas fa-cross ${styles.icon}`}></i>
            <h3>Tradycja katolicka</h3>
            <p>
              Dołączając do grupy różańcowej, możesz aktywnie uczestniczyć w
              modlitwie różańcowej, pogłębiając swoją wiarę katolicką.
            </p>
          </div>
          <div className={styles.column}>
            <i className={`fas fa-praying-hands ${styles.icon}`}></i>
            <h3>Modlitwa w intencji innych</h3>
            <p>
              Dołączając do grupy różańcowej, możesz modlić się za potrzeby
              Kościoła, za pokój na świecie i za inne intencje, czyniąc dobro
              dla siebie i innych.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupsThreeColumn;
