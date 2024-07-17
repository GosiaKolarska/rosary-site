import React from "react";
import HomeHero from "./01_hero/HomeHero";
import HomeThreeColumn from "./02_threeColumn/HomeThreeColumn";
import HomeTextWithSidebar from ".//03_textWithSidebar/HomeTextWithSidebar";
import HomeCards from "./04_cards/HomeCards";
import HomeTestimonials from "./05_testimonials/HomeTestimonials";
import HomeFAQ from "./06_faq/HomeFAQ";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <HomeHero />
      <HomeThreeColumn />
      <HomeTextWithSidebar />
      <HomeCards />
      <HomeTestimonials />
      <HomeFAQ />
    </div>
  );
};

export default Home;
