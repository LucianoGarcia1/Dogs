import React, { useState } from "react";

export const TokenPost = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    const body = {
      username,
      password,
    };
    console.log(body);

    fetch(`https://dogsapi.origamid.dev/json/jwt-auth/v1/token`, {
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
