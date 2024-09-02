import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import styles from "./Layout.module.css";

const Layout = ({ isLoggedIn, children }) => {
  return (
    <div className={styles.layout}>
      <Menu isLoggedIn={isLoggedIn} />
      <main className={styles.mainContent}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
