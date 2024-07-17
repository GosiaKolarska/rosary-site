import React from "react";
import styles from "./RulesTextJustify.module.css";

const RulesTextJustify = () => {
  return (
    <div className={`container ${styles.justifyContent}`}>
      <h2 className={styles.justifyContent__heading}>Uczestnictwo</h2>
      <p>
        W celu uczestnictwa w modlitwie, niezbędna i konieczna jest rejestracja.
        Wynikiem rejestracji jest automatyczne utworzenie profilu oraz wpisanie
        uczestnika na listę osób oczekujących do utworzenia nowej grupy
        różańcowej. Bez rejestracji pozostaje tylko osobista modlitwa w podanch
        intencjach.
      </p>
      <p>
        <b>
          Po zebraniu dwudziestu osób zakładana jest nowa aktywna grupa
          różańcowa. Każdy jej uczestnik zostanie o tym fakcie poinformowany. Od
          tego momentu zaczyna się okres codziennej aktywnej modlitwy.
        </b>
      </p>
      <p className={styles.justifyContent__paragraph}>
        Intencję do której uczestnik został przypisany w bieżącym miesiącu można
        znaleźć w panelu grupy różańcowej widocznym po zalogowaniu.
      </p>
      <p className={styles.justifyContent__paragraph}>
        By modlitwa była zawsze pełna i nieprzerwana, wymagane jest cykliczne
        potwierdzanie uczestnictwa. Potwierdzenie uczestnictwa wymagane jest co
        miesiąc w panelu grupy różańcowej. Członków grup różańcowych, którzy nie
        potwierdzą odpowiednio szybko swojego uczestnictwa będziemy osobiście
        prosić o reakcję. W tym celu zostanie wysłane przypomnienie na adres
        e-mail.
      </p>
      <p>
        Brak potwierdzenia i reakcji na przypomnienia wiąże się z usunięciem
        uczestnika z grupy do której należy. Miejsce usuniętego uczestnika
        zajmie nowy uczestnik z listy oczekujących. Dla usuniętego uczestnika
        zostaje wtedy tylko możliwość ponownej rejestracji. O wszystkich krokach
        uczestnik zostanie poinformowany zawczasu.
      </p>
      <p>
        Każdemu przysługuje prawo do odstąpienia od uczestnictwa. W tym celu
        prosimy o kontakt z nami.
      </p>
    </div>
  );
};

export default RulesTextJustify;
