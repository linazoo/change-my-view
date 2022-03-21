import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import Post from "./components/Post";
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
    <React.Fragment>
      <div className="App container">
        <NavBar />
        <Router>
          <Routes>
            <Route path="/" element={<PostList posts={posts} />} />
            <Route path="/post/:id" element={<Post />} />
          </Routes>
        </Router>
      </div>
    </React.Fragment>
  );
}

export default App;
