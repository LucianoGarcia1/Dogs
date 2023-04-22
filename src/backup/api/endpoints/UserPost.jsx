import React, { useState } from "react";

export const UserPost = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    const body = {
      username,
      email,
      password,
    };
    console.log(body);

    fetch(`https://dogsapi.origamid.dev/json/api/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
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
        placeholder="Username"
        required
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />
      <input
        type="email"
        placeholder="E-mail"
        required
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        required
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />

      <button>Enviar</button>
    </form>
  );
};
