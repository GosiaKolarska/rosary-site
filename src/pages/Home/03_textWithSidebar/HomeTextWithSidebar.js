import React, { useEffect, useState } from "react";
import styles from "./HomeTextWithSidebar.module.css";

const HomeTextWithSidebar = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetch("/data/home.json")
      .then((response) => response.json())
      .then((data) => setContent(data.textWithSidebar))
      .catch((error) => console.error("Error loading content:", error));
  }, []);

  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    <section className={styles.mainWithSidebarSection}>
      <div className="container">
        <h2 className={styles.mainWithSidebarTitle}>{content.title}</h2>
        <div className={styles.mainWithSidebar}>
          <div className={styles.mainContent}>
            {content.mainContent.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className={styles.sidebar}>
            {content.sidebarItems.map((item, index) => (
              <div key={index} className={styles.sidebarItem}>
                <i className={item.icon}></i> {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTextWithSidebar;
