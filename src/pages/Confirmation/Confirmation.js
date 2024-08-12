import React from "react";
import Hero from "../../components/Hero";

const Confirmation = () => {
  return (
    <div>
      <Hero title="Potwierdzenie" />
      <div className="container">
        <div>
          <img />
          <div>
            <h2>Dziękujemy za potwierdzenie uczestnictwa!</h2>
            <p>
              Pomaga nam to utrzymać aktywność wśród członków, następne
              powiadomienie otrzymasz za 60 dni.
            </p>
          </div>
        </div>
        <a>Wroc na portal</a>
      </div>
    </div>
  );
};

export default Confirmation;
