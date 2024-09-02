import React from "react";
import styles from "./ConfirmationModal.module.css";

const ConfirmationModal = ({ show, onConfirm, onCancel }) => {
  if (!show) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2 className={styles.modalTitle}>
          Czy na pewno chcesz usunąć się z grupy <b>Różaniec za żonę</b>?
        </h2>
        <div className={styles.modalActions}>
          <button onClick={onConfirm} className={styles.confirmButton}>
            Usuń się
          </button>
          <button onClick={onCancel} className={styles.cancelButton}>
            Anuluj
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
