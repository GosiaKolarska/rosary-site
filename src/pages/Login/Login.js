import React from "react";
import styles from "./Login.module.css";
import Hero from "../../components/Hero";

const Login = () => {
  return (
    <section className={styles.loginSection}>
      <Hero title="Logowanie" />
      <div className={styles.content}>
        <form className={styles.form}>
          <input type="email" placeholder="E-mail" className={styles.input} />
          <input type="password" placeholder="Hasło" className={styles.input} />
          <a href="#" className={styles.forgotPassword}>
            Nie pamiętasz hasła?
          </a>
          <button type="submit" className={styles.primaryButton}>
            Zaloguj się
          </button>
          <button type="button" className={styles.secondaryButton}>
            Stwórz konto
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
