import React, { useEffect, useState } from "react";
import styles from "./HomeTestimonials.module.css";

const HomeTestimonials = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetch("/data/home.json")
      .then((response) => response.json())
      .then((data) => setContent(data.testimonials))
      .catch((error) => console.error("Error loading content:", error));
  }, []);

  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    <section className={styles.testimonialsSection}>
      <div className="container">
        <div className={styles.testimonials}>
          <span className={styles.testimonialsSubtitle}>Referencje</span>
          <h2 className={styles.testimonialsTitle}>
            Zobacz świadectwa innych uczestników
          </h2>
          <div className={styles.grid}>
            {content.map((testimonial, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.cardAuthor}>
                  <img
                    src={testimonial.imgSrc}
                    alt={testimonial.name}
                    className={styles.avatar}
                  />
                  <div>
                    <h3 className={styles.cardAuthorName}>
                      {testimonial.name}
                    </h3>
                    <p className={styles.cardAuthorRole}>{testimonial.role}</p>
                  </div>
                </div>
                <div className={styles.cardDescription}>
                  <h4 className={styles.cardDescriptionTitle}>Super</h4>
                  <p className={styles.cardDescriptionText}>
                    {testimonial.testimonial}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;
