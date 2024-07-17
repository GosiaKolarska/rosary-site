import React from "react";
import styles from "./Register.module.css";
import Hero from "../../components/Hero";

const Register = () => {
  return (
    <section className={styles.registerSection}>
      <Hero title="Rejestracja" />
      <div className={styles.content}>
        <form className={styles.form}>
          <input type="text" placeholder="Imię" className={styles.input} />
          <input type="email" placeholder="E-mail" className={styles.input} />
          <input type="password" placeholder="Hasło" className={styles.input} />
          <input
            type="password"
            placeholder="Potwierdź hasło"
            className={styles.input}
          />
          <button type="submit" className={styles.primaryButton}>
            Stwórz konto
          </button>
          <button type="button" className={styles.secondaryButton}>
            Masz już konto? Zaloguj się
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;
