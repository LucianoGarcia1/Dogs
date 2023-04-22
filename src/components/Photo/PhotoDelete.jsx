import React from "react";
import styles from "./PhotoDelete.module.css";
import { DELETE_POST } from "../../Services/api";
import { useFetch } from "../../Hooks/useFetch";

export const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();
  const handleclick = async () => {
    const comfirm = window.confirm("Tem certeza que deseja deletar?");
    if (comfirm) {
      const { url, options } = DELETE_POST(id);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  };
  return (
    <>
      {loading ? (
        <button className={styles.delete} disabled>
          Deletar
        </button>
      ) : (
        <button className={styles.delete} onClick={handleclick}>
          Deletar
        </button>
      )}
    </>
  );
};
