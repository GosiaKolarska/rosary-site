import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./RulesContentWithAccordion.module.css";

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.accordion__item}>
      <button
        className={`${styles.accordion__button} ${isOpen ? styles.open : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon icon={faChevronRight} className={styles.chevronIcon} />
        {title}
      </button>
      {isOpen && <div className={styles.accordion__content}>{children}</div>}
    </div>
  );
};

const RulesContentWithAccordion = () => {
  return (
    <div className={`container ${styles.accordion}`}>
      <h2 className={styles.accordion__heading}>Grupa różańcowa</h2>
      <p>
        Grupa różańcowa działa następująco. Jedna grupa różańcowa składa się z
        dwudziestu uczestników. Tyle ile jest tajemnic różańca. Uczestnicy nie
        muszą się znać. Każdy uczestnik codziennie rozważa jedną tajemnicę
        różańca o wybranej porze i w dowolnym miejscu. Każda tajemnica odpowiada
        konkretnej intencji. Rozważanie tajemnicy to modlitwa dziesiątkiem
        różańca.
      </p>
      <p>Każdy uczestnik zaczyna rozważania słowami wstępnymi:</p>
      <p>
        „Tą dziesiątkę różańca zmawiam za moją żonę i za inne żony objęte
        modlitwą w naszej grupie różańcowej w następującej intencji [treść
        intencji].”
      </p>
      <p>
        <b>
          Ten uczestnik, który jest przypisany do pierwszej tajemnicy zmawia
          dodatkowo wstęp modlitwy różańcowej
        </b>
      </p>
      <AccordionItem title="Wierzę w Boga">
        <p className={styles.accordion__paragraph}>
          Wierzę w Boga, Ojca wszechmogącego, Stworzyciela nieba i ziemi, i w
          Jezusa Chrystusa, Syna Jego jedynego, Pana naszego, który się począł z
          Ducha Świętego, narodził się z Maryi Panny, umęczon pod Ponckim
          Piłatem, ukrzyżowan, umarł i pogrzebion. Zstąpił do piekieł, trzeciego
          dnia zmartwychwstał. Wstąpił na niebiosa, siedzi po prawicy Boga Ojca
          wszechmogącego. Stamtąd przyjdzie sądzić żywych i umarłych. Wierzę w
          Ducha Świętego, święty Kościół powszechny, świętych obcowanie,
          grzechów odpuszczenie, ciała zmartwychwstanie, żywot wieczny. Amen.
        </p>
      </AccordionItem>
      <AccordionItem title="Ojcze nasz">
        <p className={styles.accordion__paragraph}>
          Ojcze nasz, któryś jest w niebie: święć się imię Twoje, przyjdź
          Królestwo Twoje, bądź wola Twoja jako w niebie, tak i na ziemi. Chleba
          naszego powszedniego daj nam dzisiaj. I odpuść nam nasze winy, jako i
          my odpuszczamy naszym winowajcom. I nie wódź nas na pokuszenie, ale
          nas zbaw od złego. Amen.
        </p>
      </AccordionItem>
      <AccordionItem title="Zdrowaś Maryjo x3">
        <p className={styles.accordion__paragraph}>
          Zdrowaś Maryjo, łaski pełna, Pan z Tobą. Błogosławionaś Ty między
          niewiastami i błogosławiony owoc żywota Twojego, Jezus. Święta Maryjo,
          Matko Boża, módl się za nami grzesznymi, teraz i w godzinę śmierci
          naszej. Amen.
        </p>
      </AccordionItem>
      <AccordionItem title="Chwała Ojcu">
        <p className={styles.accordion__paragraph}>
          Chwała Ojcu i Synowi i Duchowi Świętemu, jak była na początku, teraz i
          zawsze i na wieki wieków. Amen.
        </p>
      </AccordionItem>
      <p>
        Następnie każdy zmawia dzięsiątkę różańca. Jedna dziesiątka różańca to
      </p>
      <AccordionItem title="Ojcze nasz">
        <p className={styles.accordion__paragraph}>
          Ojcze nasz, któryś jest w niebie: święć się imię Twoje, przyjdź
          Królestwo Twoje, bądź wola Twoja jako w niebie, tak i na ziemi. Chleba
          naszego powszedniego daj nam dzisiaj. I odpuść nam nasze winy, jako i
          my odpuszczamy naszym winowajcom. I nie wódź nas na pokuszenie, ale
          nas zbaw od złego. Amen.
        </p>
      </AccordionItem>
      <AccordionItem title="Zdrowaś Maryjo x3">
        <p className={styles.accordion__paragraph}>
          Zdrowaś Maryjo, łaski pełna, Pan z Tobą. Błogosławionaś Ty między
          niewiastami i błogosławiony owoc żywota Twojego, Jezus. Święta Maryjo,
          Matko Boża, módl się za nami grzesznymi, teraz i w godzinę śmierci
          naszej. Amen.
        </p>
      </AccordionItem>
      <AccordionItem title="Chwała Ojcu">
        <p className={styles.accordion__paragraph}>
          Chwała Ojcu i Synowi i Duchowi Świętemu, jak była na początku, teraz i
          zawsze i na wieki wieków. Amen.
        </p>
      </AccordionItem>

      <p>
        <b>Zmiana tajemnicy i intencji następuje każdego nowego miesiąca</b>,
        czyli po pierwszej radosnej następuje druga, potem trzecia i tak dalej.
        Po tajemnicach radosnych następują tajemnice światła, następnie bolesne
        i chwalebne, a po chwalebnych znowu radosne.
      </p>
      <p>Dołączając do grupy różańcowej, pierwszego dnia rozpoczynamy:</p>
      <AccordionItem title="Akt Zawierzenia">
        <p className={styles.accordion__paragraph}>
          Niepokalana Dziewico Maryjo! Królowo Rodzin, Królowo Pokoju! Zawierzam
          Ci swoją Żonę i wszystkie Żony objęte modlitwą w naszej Róży
          Różańcowej. Przez tajemnice życia Jezusa i Świętej Rodziny uproś u
          Boga łaskę ochrony tych Żon przed wszelkim złem, zwłaszcza tym jakie
          może wypływać ze słabości i grzechów mężów. Ochroń je płaszczem swojej
          miłości i modlitwy, niech pozostaną niewinne, a te które zbłądziły,
          które doświadczają nędzy grzechu skieruj na drogę nawrócenia. Tobie i
          tej modlitwie różańcowej powierzamy drogi ich rozwoju i ufamy że
          doprowadzisz je do Jezusa. Niech to dzieło modlitwy rozwija się
          przynosząc Miłość i Pokój jaki niesie światu Chrystus, aby jak
          najwięcej Żon, rodzin doświadczyło uzdrawiającej mocy Miłości Bożej.
          Tobie się powierzamy w całości.
        </p>
      </AccordionItem>
      <p>
        Co roku{" "}
        <b>
          8 grudnia staramy się być w kościele i ponowić nasz Akt Zawierzenia
        </b>{" "}
        w łączności duchowej ze wszystkimi uczestnikami grupy różańcowej.
      </p>
    </div>
  );
};

export default RulesContentWithAccordion;
