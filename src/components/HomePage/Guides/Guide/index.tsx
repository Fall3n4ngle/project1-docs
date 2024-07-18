import React from "react";

import { Guide as TGuide } from "../const";

import styles from "./styles.module.css";

const Guide = ({ subtitle, title }: Omit<TGuide, "id">) => {
  return (
    <article className={styles.guide}>
      <div />
      <h5>{title}</h5>
      <p className="body-default">{subtitle}</p>
    </article>
  );
};

export default Guide;
