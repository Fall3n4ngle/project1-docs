import React from "react";
import clsx from "clsx";
import type { Props } from "@theme/Footer/Layout";

import styles from "./styles.module.css";

export default function FooterLayout({
  style,
  links,
  logo,
  copyright,
}: Props): JSX.Element {
  return (
    <footer
      className={clsx("footer", {
        "footer--dark": style === "dark",
      })}
    >
      <div
        className={`container container-fluid footer__content ${styles.footer__content}`}
      >
        {links}
        {copyright && <>{copyright}</>}
      </div>
    </footer>
  );
}
