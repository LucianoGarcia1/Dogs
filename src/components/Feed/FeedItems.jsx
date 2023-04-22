import React from "react";
import styles from "./FeedItems.module.css";
import { Image } from "../../Services/Image";

export const FeedItems = ({ img, setModal }) => {
  const handleClick = () => {
    setModal(img);
  };
  return (
    <li className={`${styles.photo} animeLeft`} onClick={handleClick}>
      <Image src={img.src} alt={img.title}/>
      <span>{img.acessos}</span>
    </li>
  );
};
