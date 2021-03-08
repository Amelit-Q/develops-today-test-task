import React from "react";

export default function Post({ post }) {
  console.log(post, "post in Post.tsx");
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}
