import React from "react";
import PostList from "./PostList";
import { fetchMainPosts } from "../utils/api";

function TopPage() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    fetchMainPosts("top").then((posts) => {
      setPosts(posts);
    });
  }, []);
  return <PostList posts={posts} />;
}

export default TopPage;
