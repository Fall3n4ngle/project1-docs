import React from "react";

import Button from "../Button";

import styles from "./styles.module.css";

const HomePageHero = () => {
  return (
    <section className="container">
      <div className={styles.hero}>
        <h2 className="display">Hi. How can we help?</h2>
        <div className={styles.hero__search}>
          <div className={styles["hero__search-input"]}>
            <input type="text" placeholder="Search by topic or keyword" />
          </div>
          <Button>Search</Button>
        </div>
      </div>
    </section>
  );
};

export default HomePageHero;
