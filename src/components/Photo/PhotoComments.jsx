import React, { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../Context/userContext";
import { CommentsForm } from "./CommentsForm";
import styles from "./PhotoComments.module.css";

export const PhotoComments = (props) => {
  const [comments, setComments] = useState(()=> props.comments);
  const commentsSection = useRef(null);
  const { login } = useContext(UserContext);

  useEffect(()=>{
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments])
  return (
    <>
      <ul
        ref={commentsSection}
        className={`${styles.comment} ${props.single ? styles.single : ""}`}
      >
        {comments.map((c) => (
          <li key={c.comment_ID}>
            <b>{c.comment_author}: </b>
            <span>{c.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <CommentsForm id={props.id} setComments={setComments} single={props.single} />}
    </>
  );
};
