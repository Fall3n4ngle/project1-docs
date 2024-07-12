import React from "react";

import styles from "./styles.module.css";
import { guides } from "./const";
import Guide from "./Guide";

const Guides = () => {
  return (
    <section className={styles.guides}>
      <div className="container">
        <h2>Browse through our guides</h2>
        <p className="body-bigger">
          Explore all help articles for progressing with studios.
        </p>
        <div className={styles.guides__list}>
          {guides.map(({ id, ...guide }) => (
            <Guide key={id} {...guide} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guides;
