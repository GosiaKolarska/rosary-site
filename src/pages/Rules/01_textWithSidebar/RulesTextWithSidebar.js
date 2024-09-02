import React, { useEffect, useState } from "react";
import styles from "./RulesTextWithSidebar.module.css";

const RulesTextWithSidebar = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetch("/data/rules.json")
      .then((response) => response.json())
      .then((data) => setContent(data.textWithSidebar))
      .catch((error) => console.error("Error loading content:", error));
  }, []);

  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`container ${styles.textWithSidebar}`}>
      <h1 className={styles.textWithSidebar__heading}>{content.heading}</h1>
      <h2 className={styles.textWithSidebar__subheading}>
        {content.subheading}
      </h2>
      <div className={styles.textWithSidebar__wrapperInner}>
        <div className={styles.textWithSidebar__content}>
          {content.paragraphs.map((paragraph, index) => (
            <p key={index} className={styles.textWithSidebar__paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
        <div className={styles.textWithSidebar__sidebar}>
          <h2 className={styles.textWithSidebar__title}>
            {content.sidebarTitle}
          </h2>
          {content.sidebarItems.map((item, index) => (
            <div key={index} className={styles.textWithSidebar__item}>
              <i className={`${item.icon} ${styles.textWithSidebar__icon}`}></i>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RulesTextWithSidebar;
