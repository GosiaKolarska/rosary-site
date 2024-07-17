import React from "react";
import styles from "./RulesTextInstructions.module.css";

const RulesTextInstructions = () => {
  return (
    <div className={`container ${styles.plainContent}`}>
      <h2 className={styles.plainContent__heading}>Rejestracja</h2>
      <p className={styles.plainContent__paragraph}>
        Uczestnictwo w modlitwie jest dobrowolne i na czas nieokreślony. Może
        się zdarzyć, że ktoś odejdzie z róży. Dlatego, w celu zapewnienia
        należytej staranności modlitwy, uczestnictwo wymaga rejestracji. Podczas
        rejestracji konieczne jest podanie adresu e-mail i stworzenie hasła do
        logowania.
      </p>
      <h3 className={styles.plainContent__heading3}>Adres email</h3>
      <p className={styles.plainContent__paragraph}>
        Adres, który służy jako identyfikator do logowania. Jest to główny kanał
        komunikacji między administratorem a uczestnikiem. Na ten adres będą
        wysyłane następujące treści:
      </p>
      <ul>
        <li>Kod aktywacyjny podczas rejestracji.</li>
        <li>Przypomnienia o potwierdzeniu uczestnictwa.</li>
        <li>Widomości, konieczne do rozwiązywania problemów z kontem.</li>
      </ul>
      <h3 className={styles.plainContent__heading3}>Hasło</h3>
      <p>
        Ciąg znaków, który będzie używany w celu logowania do panelu uczestnika.
        Zapoznaj się z rekomendacjami dotyczącymi tworzenia haseł zawartymi na
        tej stronie
        https://www.gov.pl/web/baza-wiedzy/jak-tworzyc-bezpieczne-hasla
      </p>
    </div>
  );
};

export default RulesTextInstructions;
