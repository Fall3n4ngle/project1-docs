import React, { HTMLAttributes, PropsWithChildren } from "react";

import styles from "./styles.module.css";

type Props = HTMLAttributes<HTMLButtonElement> &
  PropsWithChildren & {
    muted?: boolean;
  };

const Button = ({ children, muted = false, ...props }: Props) => {
  return (
    <button
      className={`${styles.navbar__button} ${
        muted ? styles.navbar__button_muted : ""
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
