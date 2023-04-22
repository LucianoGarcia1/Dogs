import React, { useEffect } from 'react'
import { useFetch } from '../../Hooks/useFetch'
import { PHOTOS_GET } from '../../Services/api';
import { Error } from '../../Services/Error';
import { Loading } from '../../Services/Loading';
import { PhotoContent } from '../Photo/PhotoContent';
import styles from "./FeedModal.module.css"

export const FeedModal = ({ img, setModal }) => {
  const { erro, data, loading, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTOS_GET(img.id);
    request(url, options);
  }, [img, request]);

  const handleOutside = (e) => {
    if (e.target === e.currentTarget) {
      setModal(null)
    }
  };
  return (
    <div className={styles.modal} onClick={handleOutside}>
      {erro && <Error error={erro} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};
