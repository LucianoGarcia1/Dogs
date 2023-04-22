import React from "react";
import { Input } from "../../components/Forms/Input";
import { Button } from "../../components/Forms/Button";
import { useForm } from "../../Hooks/useForm";
import { useFetch } from "../../Hooks/useFetch";
import { PASSWORD_LOST } from "../../Services/api";
import { Error } from "../../Services/Error";
import { Head } from "../../Services/Head";

export const LoginPasswordLost = () => {
  const login = useForm();
  const { data, loading, erro, request } = useFetch();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace("perdeu", "resetar"),
      });
      request(url, options);
    }
  };
  return (
    <section className="animeLeft">
      <Head title="Perdeu a senha" />
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: "#4c1" }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="email" {...login} />

          {loading ? (
            <Button disabled children="Enviando..." />
          ) : (
            <Button children="Enviar login" />
          )}
        </form>
      )}
      <Error error={erro} />
    </section>
  );
};
