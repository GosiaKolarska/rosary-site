import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./Hero.module.css";

const Hero = ({
  title,
  subtitle, // Now expects an array of strings
  primaryButtonText,
  secondaryButtonText,
  primaryButtonLink,
  secondaryButtonLink,
}) => {
  const isOnlyTitle = !subtitle && !primaryButtonText && !secondaryButtonText;

  return (
    <section
      className={`${styles.hero} ${isOnlyTitle ? styles.onlyTitle : ""}`}
    >
      <video className={styles.videoBackground} autoPlay muted loop>
        <source src="/herovideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1>{title}</h1>
        {subtitle &&
          Array.isArray(subtitle) &&
          subtitle.map((text, index) => (
            <p key={index} className={styles.heroSubtitle}>
              {text}
            </p>
          ))}
        {(primaryButtonText || secondaryButtonText) && (
          <div className={styles.buttons}>
            {primaryButtonText && (
              <a href={primaryButtonLink} className={styles.primaryButton}>
                {primaryButtonText}
              </a>
            )}
            {secondaryButtonText && (
              <a href={secondaryButtonLink} className={styles.secondaryButton}>
                {secondaryButtonText}{" "}
                <FontAwesomeIcon icon={faArrowRight} className={styles.arrow} />
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
