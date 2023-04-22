import React, { useContext, useState } from "react";
import { Button } from "../../components/Forms/Button.jsx";
import { Input } from "../../components/Forms/Input";
import { UserContext } from "../../Context/userContext.jsx";
import { useFetch } from "../../Hooks/useFetch.jsx";
import { useForm } from "../../Hooks/useForm";
import { USER_POST } from "../../Services/api.js";
import { Error } from "../../Services/Error.jsx";
import { Head } from "../../Services/Head.jsx";

export const LoginCreate = () => {
  const username = useForm();
  const email = useForm();
  const password = useForm();

  const { userLogin } = useContext(UserContext);

  const {loading, erro, request} = useFetch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { response } = await request(url, options);
    if (response.ok) userLogin(username.value, password.value);
    console.log(response);
  };

  return (
    <section className="animeLeft">
      <Head title="Crie sua conta" />
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input type="text" label="Usuário" name="user" {...username} />
        <Input type="email" label="Email" name="email" {...email} />
        <Input type="password" label="Senha" name="password" {...password} />
        {loading ? (
          <Button disabled children="Cadastrando..." />
        ) : (
          <Button children="Cadastrar" />
        )}

        <Error error={erro} />
      </form>
    </section>
  );
};
