import React, { useEffect, useState } from "react";
import styles from "./RulesTextJustify.module.css";

const RulesTextJustify = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetch("/data/rules.json")
      .then((response) => response.json())
      .then((data) => setContent(data.justifications))
      .catch((error) => console.error("Error loading content:", error));
  }, []);

  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`container ${styles.RulesTextJustify}`}>
      <h2 className={styles.justifyContent__heading}>{content.heading}</h2>
      {content.paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className={styles.justifyContent__paragraph}
          dangerouslySetInnerHTML={{ __html: paragraph }}
        />
      ))}
    </div>
  );
};

export default RulesTextJustify;
