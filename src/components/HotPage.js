import React from "react";
import PostList from "./PostList";
import { fetchMainPosts } from "../utils/api";

function HotPage() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    fetchMainPosts("hot").then((posts) => {
      setPosts(posts);
    });
  }, []);
  return <PostList posts={posts} />;
}

export default HotPage;
