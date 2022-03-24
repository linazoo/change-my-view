import React from "react";
import PostList from "./PostList";
import { fetchMainPosts } from "../utils/api";

function NewPage() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    fetchMainPosts("new").then((posts) => {
      setPosts(posts);
    });
  }, []);
  return <PostList posts={posts} />;
}

export default NewPage;
