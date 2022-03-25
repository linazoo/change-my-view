import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import Post from "./components/Post";
import NewPage from "./components/NewPage";
import TopPage from "./components/TopPage";
import HotPage from "./components/HotPage";
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
        <Router>
          <NavBar />
          <Routes>
            <Route path="/new" element={<NewPage />} />
            <Route path="/top" element={<TopPage />} />
            <Route path="/hot" element={<HotPage />} />
            <Route path="/" element={<PostList posts={posts} />} />
            <Route path="/post/:id" element={<Post />} />
          </Routes>
        </Router>
      </div>
    </React.Fragment>
  );
}

export default App;
