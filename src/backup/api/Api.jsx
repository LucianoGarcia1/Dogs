import React from "react";
import { PhotoGet } from "./endpoints/PhotoGet";
import { PhotoPost } from "./endpoints/PhotoPost";
import { TokenPost } from "./endpoints/TokenPost";
import { UserPost } from "./endpoints/UserPost";

export const Api = () => {
  return (
    <div>
      <h2>User Post</h2>
      <UserPost />

      <h2>Token Post</h2>
      <TokenPost />

      <h2>Photo Post</h2>
      <PhotoPost />

      <h2>Photo Get</h2>
      <PhotoGet />
    </div>
  );
};
