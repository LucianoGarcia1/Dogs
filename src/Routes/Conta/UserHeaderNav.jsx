import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../Context/userContext";
import { ReactComponent as Fotos } from "../../Assets/feed.svg";
import { ReactComponent as Estatisticas } from "../../Assets/estatisticas.svg";
import { ReactComponent as Post } from "../../Assets/adicionar.svg";
import { ReactComponent as Sair } from "../../Assets/sair.svg";
import styles from "./UserNav.module.css";
import { UseMedia } from "../../Hooks/UseMedia";

export const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);
  const mobile = UseMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = useState(false);

  const { pathname } = useLocation();
  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);
  return (
    <>
      {mobile && (
        <button
          aria-label="menu"
          onClick={() => setMobileMenu((prev) => !prev)}
          className={`${styles.mobileBtn} ${
            mobileMenu && styles.mobileBtnActive
          }`}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="/conta" end>
          <Fotos />
          {mobile && "Minhas Fotos"}
        </NavLink>
        <NavLink to="/conta/estatistica">
          <Estatisticas />
          {mobile && "Estatísticas"}
        </NavLink>
        <NavLink to="/conta/postar">
          <Post />
          {mobile && "Adicionar Foto"}
        </NavLink>
        <button onClick={userLogout}>
          <Sair />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};
