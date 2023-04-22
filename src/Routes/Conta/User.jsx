import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { Feed } from "../../components/Feed/Feed";
import { UseEstatisticas } from "./UseEstatisticas";
import { UsePost } from "./UsePost";
import { UserHeader } from "./UserHeader";
import { UserContext } from "../../Context/userContext";
import { NotFound } from "../NotFound";
import { Head } from "../../Services/Head";

export const User = () => {
  const { data } = useContext(UserContext);
  return (
    <section className="container">
      <Head title="Minha conta" />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UsePost />} />
        <Route path="estatistica" element={<UseEstatisticas />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};
