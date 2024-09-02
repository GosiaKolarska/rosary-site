import React, { useEffect, useState } from "react";
import styles from "./HomeFAQ.module.css";

const HomeFAQ = () => {
  const [content, setContent] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    fetch("/data/home.json")
      .then((response) => response.json())
      .then((data) => setContent(data.faq))
      .catch((error) => console.error("Error loading content:", error));
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    <section className={styles.faqSection}>
      <div className="container">
        <div className={styles.faq}>
          <span className={styles.faqSubtitle}>Q&A</span>
          <h2>Pozostałe pytania</h2>
          <div className={styles.questions}>
            {content.map((faq, index) => (
              <div key={index} className={styles.questionItem}>
                <button
                  className={styles.question}
                  onClick={() => toggleFAQ(index)}
                >
                  <i
                    className={`fas ${
                      openIndex === index
                        ? "fa-chevron-down"
                        : "fa-chevron-right"
                    } ${styles.icon}`}
                  ></i>
                  {faq.question}
                </button>
                <div
                  className={`${styles.answer} ${
                    openIndex === index ? styles.show : ""
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFAQ;
