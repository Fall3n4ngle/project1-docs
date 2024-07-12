import React, { HTMLAttributes, PropsWithChildren } from "react";

import styles from "./styles.module.css";

type Props = HTMLAttributes<HTMLButtonElement> & PropsWithChildren;

const Button = ({ children, ...props }: Props) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};

export default Button;
