import React from "react";
import { Link } from "react-router-dom";

export default function PostList({ posts = [] }) {
  return posts.map((post) => {
    return (
      <div className="">
        <h1>
          <Link to="/post">{post.data.title}</Link>
        </h1>
        <p>{post.data.author}</p>
      </div>
    );
  });
}
