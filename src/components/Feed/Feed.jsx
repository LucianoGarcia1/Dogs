import React, { useEffect, useState } from "react";
import { FeedModal } from "./FeedModal";
import { FeedPhotos } from "./FeedPhotos";
import PropTypes from 'prop-types';

export const Feed = ({ user }) => {
  const [modal, setModal] = useState(null);
  const [pages, setPages] = useState([1]);
  const [infinite, setInfinite] = useState(true);

  useEffect(() => {
    let wait = false;
    const infiniteScroll = (e) => {
      if (infinite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;
        if (scroll > height * 0.75 && !wait) {
          setPages((prev) => [...prev, prev.length + 1]);
          wait = true;

          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    };

    window.addEventListener("wheel", infiniteScroll);
    window.addEventListener("scroll", infiniteScroll);
    return () => {
      window.removeEventListener("wheel", infiniteScroll);
      window.removeEventListener("scroll", infiniteScroll);
    };
  }, [infinite]);
  return (
    <div>
      {modal && <FeedModal img={modal} setModal={setModal} />}

      {pages.map((p) => (
        <FeedPhotos
          key={p}
          page={p}
          user={user}
          setModal={setModal}
          setInfinite={setInfinite}
        />
      ))}
    </div>
  );
};