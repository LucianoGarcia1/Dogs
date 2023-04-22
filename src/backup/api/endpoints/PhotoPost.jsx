import React, { useState } from "react";

export const PhotoPost = () => {
  const [token, setToken] = useState("");
  const [nome, setNome] = useState("");
  const [peso, setPeso] = useState("");
  const [idade, setIdade] = useState("");
  const [img, setImg] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("img", img);
    formdata.append("nome", nome);
    formdata.append("peso", peso);
    formdata.append("idade", idade);

    fetch(`https://dogsapi.origamid.dev/json/api/photo`, {
      method: "POST",
      headers: {
        Authorization : `Bearer ${token}`
      },
      body: formdata,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <form onSubmit={handlesubmit}>
      <input
        type="text"
        placeholder="token"
        required
        value={token}
        onChange={({ target }) => setToken(target.value)}
      />
      <input
        type="text"
        placeholder="nome"
        required
        value={nome}
        onChange={({ target }) => setNome(target.value)}
      />
      <input
        type="number"
        placeholder="peso"
        required
        value={peso}
        onChange={({ target }) => setPeso(target.value)}
      />
      <input
        type="number"
        placeholder="idade"
        required
        value={idade}
        onChange={({ target }) => setIdade(target.value)}
      />
      <input type="file" onChange={({ target }) => setImg(target.files[0])} />
      <button>Enviar</button>
    </form>
  );
};
