import React from "react";
import { NavBar } from "./components/NavBar";
import PostList from "./components/PostList";
import { fetchMainPosts } from "./utils/api";

function App() {
  const [posts, setPosts] = React.useState([]);
  React.useEffect(() => {
    fetchMainPosts("top").then((posts) => {
      setPosts(posts);
    });
  }, []);

  return (
    <div className="App container">
      <NavBar />
      <PostList posts={posts} />
    </div>
  );
}

export default App;
