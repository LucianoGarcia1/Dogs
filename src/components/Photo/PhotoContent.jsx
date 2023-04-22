import React, { useContext } from "react";
import styles from "./PhotoContent.module.css";
import { Link } from "react-router-dom";
import { PhotoComments } from "./PhotoComments";
import { UserContext } from "../../Context/userContext";
import { PhotoDelete } from "./PhotoDelete";
import { Image } from "../../Services/Image";
export const PhotoContent = ({ data, single }) => {
  const { photo, comments } = data;
  const user = useContext(UserContext);

  return (
    <div className={`${styles.photo} ${single ?  styles.single : ""}`}>
      <div className={styles.img}>
        <Image src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}
            <span className={styles.vilws}>{photo.acessos}</span>
          </p>

          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>

          <ul className={styles.attributes}>
            <li>{photo.peso} kg</li>
            <li>{photo.idade} anos</li>
            <li></li>
          </ul>
        </div>
      </div>

      <PhotoComments
        id={photo.id}
        className={styles.comments}
        comments={comments}
        single={single}
      />
    </div>
  );
};
