import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Forms/Button";
import { Input } from "../../components/Forms/Input";
import { UserContext } from "../../Context/userContext.jsx";
import { useForm } from "../../Hooks/useForm";
import { TOKEN_POST, GET_USER } from "../../Services/api";
import { Error } from "../../Services/Error";
import styles from "./LoginForm.module.css";
import stylesBtn from "../../components/Forms/Button.module.css";
import { Head } from "../../Services/Head";

export const LoginForm = () => {
  const userName = useForm();
  const userPassword = useForm();

  const { userLogin, error, loading } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userName.validate() && userPassword.validate()) {
      userLogin(userName.value, userPassword.value);
    }
  };
  return (
    <section className="animeLeft">
      <Head title="Login" />
      <h1 className="title">Login</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="user" {...userName} />
        <Input
          label="Senha"
          type="password"
          name="password"
          {...userPassword}
        />

        {loading ? (
          <Button disabled children="Carregando..." />
        ) : (
          <Button children="Entrar" />
        )}

        <Error error={error && "Dados incorretos."} />
      </form>
      <Link className={styles.perdeu} to="/login/perdeu">
        Perdeu a Senha?
      </Link>

      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>

        <Link className={stylesBtn.button} to="/login/criar">
          Cadastro
        </Link>
      </div>
    </section>
  );
};
