import React, { useState } from "react";
import { ReactComponent as Enviar } from "../../Assets/enviar.svg";
import { useFetch } from "../../Hooks/useFetch";
import { COMMENT_POST } from "../../Services/api";
import { Error } from "../../Services/Error";
import styles from "./PhotoForm.module.css";

export const CommentsForm = ({ id, setComments, single }) => {
  const [comment, setComment] = useState("");
  const { request, erro } = useFetch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);

    if (response.ok) {
      setComment("");
      setComments((comments) => [...comments, json]);
    }
  };
  return (
    <form
      className={`${styles.form} ${single ? styles.single : ""}`}
      onSubmit={handleSubmit}
    >
      <textarea
        name="comments"
        id="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
        className={styles.textarea}
      />

      <button className={styles.button}>
        <Enviar />
      </button>

      <Error error={erro} />
    </form>
  );
};
