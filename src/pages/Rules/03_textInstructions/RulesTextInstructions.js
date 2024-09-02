import React, { useEffect, useState } from "react";
import styles from "./RulesTextInstructions.module.css";

const RulesTextInstructions = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetch("/data/rules.json")
      .then((response) => response.json())
      .then((data) => setContent(data.instructions))
      .catch((error) => console.error("Error loading content:", error));
  }, []);

  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`container ${styles.plainContent}`}>
      <h2 className={styles.plainContent__heading}>{content.heading}</h2>
      {content.paragraphs.map((paragraph, index) => (
        <p key={index} className={styles.plainContent__paragraph}>
          {paragraph}
        </p>
      ))}
      <h3 className={styles.plainContent__heading3}>
        {content.subheadings.email}
      </h3>
      <p className={`mb-3 ${styles.plainContent__paragraph}`}>
        {content.paragraphs[1]}
      </p>
      <ul className={styles.plainContent__list}>
        {content.listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3 className={styles.plainContent__heading3}>
        {content.subheadings.password}
      </h3>
      <p>
        {content.passwordParagraph}
        <a href="https://www.gov.pl/web/baza-wiedzy/jak-tworzyc-bezpieczne-hasla">
          https://www.gov.pl/web/baza-wiedzy/jak-tworzyc-bezpieczne-hasla
        </a>
      </p>
    </div>
  );
};

export default RulesTextInstructions;
