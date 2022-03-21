import React from "react";
import { Link } from "react-router-dom";

export default function PostList({ posts = [] }) {
  return (
    <div className="main">
      {posts.map((post) => {
        // console.log(post);
        return (
          <div key={post.data.id}>
            <h1>
              <Link className="post-title" to={`/post/${post.data.id}`}>
                {post.data.title}
              </Link>
            </h1>
            <p>{post.data.author}</p>
          </div>
        );
      })}
    </div>
  );
}
