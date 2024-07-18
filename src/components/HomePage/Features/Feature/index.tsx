import React from "react";

import { Feature as TFeature } from "../const";
import Link from "@docusaurus/Link";

import styles from "./styles.module.css";

const Feature = ({ title, description, cta }: Omit<TFeature, "id">) => {
  return (
    <article className={styles.feature}>
      <h4>{title}</h4>
      <p className="body-default">{description}</p>
      <Link to="/">{cta}</Link>
    </article>
  );
};

export default Feature;
