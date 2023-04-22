import React, { useEffect } from "react";
import { Head } from "../../Services/Head";
import { useFetch } from "../../Hooks/useFetch";
import { GET_STATS } from "../../Services/api";
import { Loading } from "../../Services/Loading";
import { Error } from "../../Services/Error";
import { UserGraphs } from "./UserGraphs";

export const UseEstatisticas = () => {
  const { data, erro, loading, request } = useFetch();
  useEffect(() => {
    const getData = async () => {
      const { url, options } = GET_STATS();
      await request(url, options);
    };
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (erro) return <Error error={erro} />;
  if (data)
    return (
      <section>
        <Head title="Estatísticas" />
        <UserGraphs data={data}/>
      </section>
    );
  else return null;
};
