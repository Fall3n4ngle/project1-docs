import React from "react";

import { features } from "./const";
import Feature from "./Feature";

import styles from "./styles.module.css";

const HomePageFeatures = () => {
  return (
    <section className="container">
      <div className={styles.features}>
        {features.map(({ id, ...feature }) => (
          <Feature key={id} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default HomePageFeatures;
