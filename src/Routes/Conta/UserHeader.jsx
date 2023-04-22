import React, { useEffect, useState } from "react";
import { UserHeaderNav } from "./UserHeaderNav";
import styles from "./UserHeader.module.css";
import { useLocation } from "react-router-dom";

export const UserHeader = () => {
  const [title, setTile] = useState(null);
  const location = useLocation();
  useEffect(() => {
    const { pathname } = location;

    switch (pathname) {
      case "/conta/estatistica":
        setTile("Estatísticas");
        break;
      case "/conta/postar":
        setTile("Poste Sua Foto");
        break;
      default:
        setTile("Minha Conta");
    }
  }, [location]);
  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};
