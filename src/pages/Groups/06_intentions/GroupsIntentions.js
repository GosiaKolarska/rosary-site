import React from "react";
import styles from "./GroupsIntentions.module.css";

const GroupsIntentions = () => {
  return (
    <section className={styles.intencjeSection}>
      <div className="container">
        <h2 className={styles.heading}>Intencje</h2>
        <p className={styles.description}>
          Codziennie modlimy się jedną dziesiątką Różańca świętego według
          przydzielonej tajemnicy – w ten sposób codziennie odmawiany jest cały
          różaniec.
        </p>
        <div className={styles.tajemnice}>
          <div className={styles.tajemnica}>
            <h3 className={styles.tajemnicaTitle}>Tajemnice radosne</h3>
            <ol>
              <li>
                O trwałość naszych małżeństw i przezwyciężanie sytuacji
                kryzysowych.
              </li>
              <li>
                Aby nasze żony odkrywały w sobie piękno, które każda z nich nosi
                w sobie.
              </li>
              <li>O łaskę niezachwianej wiary dla naszych żon.</li>
              <li>Aby nasze żony stawały się świętymi matkami.</li>
              <li>O łaskę Ducha Św. na każdy dzień dla nich.</li>
            </ol>
          </div>
          <div className={styles.separator}></div>
          <div className={styles.tajemnica}>
            <h3 className={styles.tajemnicaTitle}>Tajemnice bolesne</h3>
            <ol>
              <li>O łaskę świadomości błędów popełnianych przez nasze żony.</li>
              <li>
                O uzdrowienie naszych żon ze zranień, które noszą w sobie.
              </li>
              <li>O dar zmartwychwstania i życia wiecznego dla nich.</li>
              <li>
                O to, aby miały pewność i poczucie, że są przez mężów kochane i
                akceptowane takimi jakimi są.
              </li>
              <li>
                O ochronę umysłów naszych żon przed kłamstwami podszeptywanymi
                przez szatana.
              </li>
            </ol>
          </div>
          <div className={styles.separator}></div>
          <div className={styles.tajemnica}>
            <h3 className={styles.tajemnicaTitle}>Tajemnice chwalebne</h3>
            <ol>
              <li>
                O łaskę cierpliwości potrzebną do budowania naszych małżeństw i
                wychowania dzieci.
              </li>
              <li>
                O wytrwałość w okazywaniu wzajemnej czułości i troski w naszych
                małżeństwach.
              </li>
              <li>
                O Boże błogosławieństwo dla pracy wkładanej w pielęgnowanie
                domowego ogniska.
              </li>
              <li>O siłę w wykonywaniu rutynowych czynności każdego dnia.</li>
              <li>O dar wybaczania.</li>
            </ol>
          </div>
          <div className={styles.separator}></div>
          <div className={styles.tajemnica}>
            <h3 className={styles.tajemnicaTitle}>Tajemnice światła</h3>
            <ol>
              <li>
                O codzienne odnajdywanie i wypełnianie w życiu naszych żon
                Bożego powołania.
              </li>
              <li>Aby nie były zaniedbywane przez swoich mężów.</li>
              <li>Aby w swoim sercu pielęgnowały dobro.</li>
              <li>
                O łaskę opieki i obecności Bożej, aby nigdy nie czuły się
                osamotnione.
              </li>
              <li>Dziękczynna za wszystkie nasze żony z róży różańcowej.</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupsIntentions;
