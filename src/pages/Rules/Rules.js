import React from "react";
import RulesTextWithSidebar from "./01_textWithSidebar/RulesTextWithSidebar";
import RulesContentWithAccordion from "./02_contentWithAccordion/RulesContentWithAccordion";
import RulesTextInstructions from "./03_textInstructions/RulesTextInstructions";
import RulesTextJustify from "./04_textJustify/RulesTextJustify";
import Hero from "../../components/Hero";
import styles from "./Rules.module.css";

const Rules = () => {
  return (
    <div>
      <Hero />
      <RulesTextWithSidebar />
      <RulesContentWithAccordion />
      <RulesTextInstructions />
      <RulesTextJustify />
    </div>
  );
};

export default Rules;
