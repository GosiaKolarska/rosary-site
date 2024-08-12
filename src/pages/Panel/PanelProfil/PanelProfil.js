import React, { useState } from "react";
import Hero from "../../../components/Hero";
import styles from "./PanelProfil.module.css";

const PanelProfil = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSaveChanges = () => {
    console.log("Changes saved");
  };

  const handleChangePassword = () => {
    console.log("Password changed");
  };

  return (
    <div className={styles.panelProfilPage}>
      <Hero title="Profil" />
      <div className="container">
        <div className={styles.panelProfilSection}>
          <h2 className={styles.panelProfilSectionTitle}>Dane</h2>
          <label className={styles.panelProfilLabel}>Imię</label>
          <input
            type="text"
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label className={styles.panelProfilLabel}>E-mail</label>
          <input
            type="email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className={styles.button} onClick={handleSaveChanges}>
            Zapisz zmiany
          </button>
        </div>
        <div className={styles.panelProfilSection}>
          <h2 className={styles.panelProfilSectionTitle}>Adres</h2>
          <label className={styles.panelProfilLabel}>
            Kraj zamieszkania (opcjonalnie)
          </label>
          <input
            type="text"
            className={styles.input}
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <label className={styles.panelProfilLabel}>
            Miasto zamieszkania (opcjonalnie)
          </label>
          <input
            type="text"
            className={styles.input}
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button className={styles.button} onClick={handleSaveChanges}>
            Zapisz zmiany
          </button>
        </div>
        <div className={styles.panelProfilSection}>
          <h2 className={styles.panelProfilSectionTitle}>Bezpieczeństwo</h2>
          <label className={styles.panelProfilLabel}>Hasło</label>
          <input
            type="password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className={styles.panelProfilLabel}>Powtórz hasło</label>
          <input
            type="password"
            className={styles.input}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button className={styles.button} onClick={handleChangePassword}>
            Zmień hasło
          </button>
        </div>
      </div>
    </div>
  );
};

export default PanelProfil;
