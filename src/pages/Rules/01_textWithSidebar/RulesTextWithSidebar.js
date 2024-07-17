import React from "react";
import styles from "./RulesTextWithSidebar.module.css";

const RulesTextWithSidebar = () => {
  return (
    <div className={`container ${styles.textWithSidebar}`}>
      <h2 className={styles.textWithSidebar__subheading}>Ogólne</h2>
      <div className={styles.textWithSidebar__wrapperInner}>
        <div className={styles.textWithSidebar__content}>
          <p className={styles.textWithSidebar__paragraph}>
            Modlitwa działa na zasadzie grupy różańcowej. Modlitwą są objęte
            wszystkie żony z grupy do której mężowie należą. Za każdą z nich
            codziennie jest odmawiany cały różaniec. Każda tajemnica różańca to
            inna intencja, także w ciągu jednego dnia za każdą żonę jest
            zmawiana modlitwa we wszystkich intencjach. Modlitwa nie wymaga
            znacznego wysiłku. Jest to ok 5 minut dziennie o wybranej porze i w
            dowolnym miejscu.
          </p>
          <p className={styles.textWithSidebar__paragraph}>
            Zachęcamy by poinformować żonę o intencji w której uczestnik się
            modli. W czasie gdy jest dobrze wzmacnia to miłość małżonków, a w
            czasie gdy jest gorzej pomaga to tę miłość utrzymać.
          </p>
        </div>
        <div className={styles.textWithSidebar__sidebar}>
          <h2 className={styles.textWithSidebar__title}>W pigułce</h2>
          <div className={styles.textWithSidebar__item}>
            <i className={`fas fa-clock ${styles.textWithSidebar__icon}`}></i>
            <span>5 minut dziennie</span>
          </div>
          <div className={styles.textWithSidebar__item}>
            <i className={`fas fa-cog ${styles.textWithSidebar__icon}`}></i>
            <span>wybrana pora</span>
          </div>
          <div className={styles.textWithSidebar__item}>
            <i
              className={`fas fa-map-marker-alt ${styles.textWithSidebar__icon}`}
            ></i>
            <span>dowolne miejsce</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RulesTextWithSidebar;
