import React from "react";
import styles from "./footer.module.css";
import { ReactComponent as Dogs } from "../../Assets/dogs-footer.svg";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Dogs />
      <p>Dogs. Alguns direitos reservados.</p>
    </footer>
  );
};
