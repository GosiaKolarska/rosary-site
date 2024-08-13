import React, { useState } from "react";
import styles from "./HomeFAQ.module.css";

const faqData = [
  {
    question: "Czy można modlić się za cudzą żonę?",
    answer:
      "Modlitwa za cudzą osobę, w tym za cudzą żonę, może być podejmowana z intencją dobra i wsparcia dla niej oraz jej rodziny. Jednakże, zawsze należy szanować granice i prywatność innych osób. Jeśli modlitwa za cudzą żonę jest podejmowana z dobrymi intencjami, na przykład aby prosić o zdrowie, szczęście, lub inne dobrodziejstwa dla niej i jej rodziny, to zazwyczaj nie ma niczego niewłaściwego w takim działaniu.",
  },
  {
    question: "Co się stanie jak zapomnę się pomodlić?",
    answer:
      "Jeśli zapomnisz się pomodlić, nic złego się nie stanie. Ważne jest, aby starać się modlić regularnie, ale jednorazowe zapomnienie nie powinno być powodem do zmartwień. Możesz kontynuować modlitwę następnego dnia.",
  },
  {
    question: "Czy można się spotkać z innymi uczestnikami grupy na żywo?",
    answer:
      "Tak, wiele grup organizuje spotkania na żywo, aby wspólnie się modlić i dzielić doświadczeniami. Możesz skontaktować się z liderem grupy, aby dowiedzieć się więcej o planowanych spotkaniach.",
  },
  {
    question: "Co się stanie jak nie będę potwierdzał uczestnictwa?",
    answer:
      "Regularne potwierdzanie uczestnictwa jest ważne, aby grupa mogła śledzić postępy i zaangażowanie swoich członków. Jeśli nie będziesz potwierdzał uczestnictwa, lider grupy może się z Tobą skontaktować, aby dowiedzieć się, czy wszystko jest w porządku i czy nadal chcesz być częścią grupy.",
  },
];

const HomeFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className="container">
        <div className={styles.faq}>
          <span className={styles.faqSubtitle}>Q&A</span>
          <h2>Pozostałe pytania</h2>
          <div className={styles.questions}>
            {faqData.map((faq, index) => (
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
