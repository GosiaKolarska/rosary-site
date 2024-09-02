import React, { useEffect, useState } from "react";
import Hero from "../../../components/Hero";

const HomeHero = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetch("/data/home.json")
      .then((response) => response.json())
      .then((data) => setContent(data.hero))
      .catch((error) => console.error("Error loading content:", error));
  }, []);

  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    <Hero
      title={content.title}
      subtitle={content.subtitle}
      primaryButtonText={content.primaryButtonText}
      primaryButtonLink={content.primaryButtonLink}
      secondaryButtonText={content.secondaryButtonText}
      secondaryButtonLink={content.secondaryButtonLink}
    />
  );
};

export default HomeHero;
