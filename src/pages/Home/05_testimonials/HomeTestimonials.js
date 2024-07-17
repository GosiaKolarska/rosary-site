import React from "react";
import styles from "./HomeTestimonials.module.css";

const testimonialsData = [
  {
    name: "Jan Kowalski",
    role: "Frontend developer",
    testimonial:
      "Bardzo rekomenduję tę grupę. Codzienne aktywności, wiele treści, jest wybitna!",
    imgSrc: "/testi1.png",
  },
  {
    name: "Bob Kowalski",
    role: "Prawnik",
    testimonial:
      "Wiele wyniosłem po modlitwach tutaj, mam nadzieję, że portal się rozrośnie i również poszerzy działalność na inne grupy. Polecam!",
    imgSrc: "/testi2.png",
  },
  {
    name: "Weronika Kowalska",
    role: "Sprzedawczyni",
    testimonial:
      "Bardzo pomogło. Ta grupa jest wybitna! Codzienne aktywności, wiele treści i inne.",
    imgSrc: "/testi3.png",
  },
  {
    name: "Andrei Kowalski",
    role: "Tłumacz",
    testimonial:
      "Super grupa. Mam nadzieję, że portal się rozrośnie i również poszerzy działalność na inne grupy. Polecam!",
    imgSrc: "/testi4.png",
  },
];

const HomeTestimonials = () => {
  return (
    <section className={styles.testimonialsSection}>
      <div className="container">
        <div className={styles.testimonials}>
          <span className={styles.testimonialsSubtitle}>Referencje</span>
          <h2 className={styles.testimonialsTitle}>
            Zobacz świadectwa innych uczestników
          </h2>
          <div className={styles.grid}>
            {testimonialsData.map((testimonial, index) => (
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
