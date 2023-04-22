import React from "react";
import { Feed } from "../components/Feed/Feed";
import { Head } from "../Services/Head";

export const Home = () => {
  return (
    <section className="container mainContainer">
      <Head
        title="Fotos"
      />
      <Feed />
    </section>
  );
};
