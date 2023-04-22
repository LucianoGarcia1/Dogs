import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../Hooks/useFetch";
import { PHOTO } from "../../Services/api";
import { Error } from "../../Services/Error";
import { Loading } from "../../Services/Loading";
import { PhotoContent } from "./PhotoContent";
import { Head } from "../../Services/Head";

export const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();
  useEffect(() => {
    const { url, options } = PHOTO(id);
    request(url, options);
  }, [id, request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data) {
    return (
      <section className="container mainContainer">
        <Head title={data.photo.title} />
        <PhotoContent single={true} data={data} />
      </section>
    );
  } else return null;
};
