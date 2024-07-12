import React from "react";

import styles from "./styles.module.css";
import Button from "../Button";

const Support = () => {
  return (
    <section className={`${styles.support} footer footer--dark`}>
      <div className="container">
        <h1>Can't find answers you're looking for?</h1>
        <p className="body-bigger">We're here to help you.</p>
        <Button>Contact Support</Button>
      </div>
    </section>
  );
};

export default Support;
