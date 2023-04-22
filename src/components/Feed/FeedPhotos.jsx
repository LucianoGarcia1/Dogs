import React, { useEffect, useState } from "react";
import { useFetch } from "../../Hooks/useFetch";
import { PHOTO_GET } from "../../Services/api";
import { Error } from "../../Services/Error";
import { Loading } from "../../Services/Loading";
import { FeedItems } from "./FeedItems";
import styles from "./FeedPhotos.module.css";

export const FeedPhotos = ({ setModal, user, page, setInfinite }) => {
  const { data, erro, loading, request } = useFetch();

  useEffect(() => {
    const getPhotos = async () => {
      const total = 6;
      const { url, options } = PHOTO_GET({ page, total, user });
      const { response, json } = await request(url, options);
      if (response && response.ok && json.length < total) {
        setInfinite(false);
      }
    };
    getPhotos();
  }, [request, user, page, setInfinite]);

  if (erro) return <Error error={erro} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={styles.feed}>
        {data.map((img) => (
          <FeedItems key={img.id} img={img} setModal={setModal} />
        ))}
      </ul>
    );
  else return null;
};
