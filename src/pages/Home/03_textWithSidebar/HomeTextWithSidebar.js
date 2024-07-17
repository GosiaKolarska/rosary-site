import React from "react";
import styles from "./HomeTextWithSidebar.module.css";

const HomeTextWithSidebar = () => {
  return (
    <section className={styles.mainWithSidebarSection}>
      <div className="container">
        <h2 className={styles.mainWithSidebarTitle}>Jak to działa?</h2>
        <div className={styles.mainWithSidebar}>
          <div className={styles.mainContent}>
            <p>
              Mężowie z grupy codziennie modlą się za swoje żony oraz za żony
              pozostałych mężów z grupy różańcowej. Modlitwa trwa około{" "}
              <strong>5 minut dziennie</strong> i nie wymaga znacznego wysiłku.
              Każdego dnia <strong>20 mężów modli się za każdą z żon</strong>,
              wypraszając łaski i opiekę Matki Najświętszej. Za każdą żonę
              odmawiany jest różaniec we wszystkich intencjach.
            </p>
            <p>
              Modlitwa opiera się na zasadzie grupy różańcowej, gdzie każda
              osoba odmawia dziesiątkę różańca o dowolnej porze i w dowolnym
              miejscu.
            </p>
          </div>
          <div className={styles.sidebar}>
            <div className={styles.sidebarItem}>
              <i className="fa fa-clock-o"></i> 5 minut dziennie
            </div>
            <div className={styles.sidebarItem}>
              <i className="fa fa-users"></i> grupa 20 mężów
            </div>
            <div className={styles.sidebarItem}>
              <i className="fa fa-cross"></i> dziesiątka różańca
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTextWithSidebar;
