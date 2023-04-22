import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";
import { ReactComponent as Dogs } from "../../Assets/dogs.svg";
import { UserContext } from "../../Context/userContext";

export const Header = () => {
  const { data } = useContext(UserContext);
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" className={styles.logo} aria-label="Dogs | Home">
          <Dogs />
        </Link>

        {data ? (
          <Link to="/conta" className={styles.login}>
            {data.nome}
          </Link>
        ) : (
          <Link to="/login" className={styles.login}>
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};
