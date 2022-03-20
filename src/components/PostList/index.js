import React from "react";

export default function PostList({ posts }) {
  return posts.map((post) => {
    return (
      <div className="card">
        <h1>{post.data.title}</h1>
        <p>{post.data.author}</p>
      </div>
    );
  });
}
