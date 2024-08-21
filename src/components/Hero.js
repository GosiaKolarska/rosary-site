import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./Hero.module.css";

const Hero = ({
  title,
  subtitle,
  primaryButtonText,
  secondaryButtonText,
  primaryButtonLink,
  secondaryButtonLink,
}) => {
  const isOnlyTitle = !subtitle && !primaryButtonText && !secondaryButtonText;

  return (
    <section
      className={`${styles.hero} ${isOnlyTitle ? styles.heroOnlyTitle : ""}`}
    >
      <video className={styles.heroVideoBackground} autoPlay muted loop>
        <source src="/herovideo2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.heroOverlay}></div>
      <div className={styles.heroContent}>
        {title && <h1 className={styles.heroTitle}>{title}</h1>}
        {subtitle &&
          Array.isArray(subtitle) &&
          subtitle.map((text, index) => (
            <p key={index} className={styles.heroSubtitle}>
              {text}
            </p>
          ))}
        {(primaryButtonText || secondaryButtonText) && (
          <div className={styles.heroButtons}>
            {primaryButtonText && (
              <a href={primaryButtonLink} className={styles.heroPrimaryButton}>
                {primaryButtonText}
              </a>
            )}
            {secondaryButtonText && (
              <a
                href={secondaryButtonLink}
                className={styles.heroSecondaryButton}
              >
                {secondaryButtonText}{" "}
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className={styles.heroArrow}
                />
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
