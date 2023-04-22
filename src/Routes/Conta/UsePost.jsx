import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Forms/Button";
import { Input } from "../../components/Forms/Input";
import { useFetch } from "../../Hooks/useFetch";
import { useForm } from "../../Hooks/useForm";
import { PHOTO_POST } from "../../Services/api";
import { Error } from "../../Services/Error";
import styles from "./UserPost.module.css";
import { Head } from "../../Services/Head";

export const UsePost = () => {
  const username = useForm();
  const peso = useForm();
  const idade = useForm();
  const [img, setImg] = useState({});
  const navigate = useNavigate();


  const { data, erro, loading, request } = useFetch();

  useEffect(() => {
    if (data) navigate("/conta");
  }, [data, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("img", img.img);
    formData.append("nome", username.value);
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);

    const token = localStorage.getItem("token");
    const { url, options } = PHOTO_POST(token, formData);
    request(url, options);
  };

  const handleImg = ({ target }) => {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      img: target.files[0],
    });
  };

  return (
    <section className={`${styles.post} animeLeft`}>
      <Head title="Poste sua foto" />
      <form onSubmit={handleSubmit}>
        <Input type="text" label="Nome" {...username} />
        <Input type="number" label="Peso" {...peso} />
        <Input type="number" label="Idade" {...idade} />
        <input
          type="file"
          className={styles.file}
          name="img"
          id="img"
          onChange={handleImg}
        />
        {loading ? (
          <Button disabled children="Enviando..." />
        ) : (
          <Button children="Enviar" />
        )}

        <Error error={erro} />
      </form>
      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url('${img.preview}')` }}
          ></div>
        )}
      </div>
    </section>
  );
};
