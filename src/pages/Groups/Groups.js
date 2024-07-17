import React from "react";
import GroupsHero from "./01_hero/GroupsHero";
import GroupsThreeColumn from "./02_threeColumns/GroupsThreeColumn";
import GroupsCard from "./03_card/GroupsCard";
import GroupsTextWithSidebar from "./04_textWithSidebar/GroupsTextWithSidebar";
import GroupsCardList from "./05_cardsList/GroupsCardList";
import HomeTestimonials from "../Home/05_testimonials/HomeTestimonials";
import HomeFAQ from "../Home/06_faq/HomeFAQ";
import GroupsCTA from "./09_cta/GroupsCTA";
import GroupsIntentions from "./06_intentions/GroupsIntentions";

const Groups = () => {
  return (
    <div>
      <GroupsHero />
      <GroupsThreeColumn />
      <GroupsCard />
      <GroupsTextWithSidebar />
      <GroupsCardList />
      <GroupsIntentions />
      <HomeTestimonials />
      <HomeFAQ />
      <GroupsCTA />
    </div>
  );
};

export default Groups;
