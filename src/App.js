import React, { useState, useEffect } from "react";
// import React from 'react';
import './App.css';
import './index.css';
import Slider from "./components/Slider"
import Navbar from "./components/Navbar"
import NewContent from "./components/NewContent"
import PostContainer from './components/PostContainer';
import Footer from "./components/Footer"

function App() {
    const [posts, setPosts] = useState([]);
    const [showForm, setShowForm] = useState(true);
    useEffect(() => {
      fetch("http://localhost:3000/posts")
        .then((r) => r.json())
        .then((data) => {
          setPosts(data);
        });
    }, []);
  
    const toggleForm = () => {
      setShowForm((showForm) => !showForm);
    };
    function handleAddPost(newPost) {
      setPosts([...posts, newPost]);
    }
    function handleDeletePost(id) {
      const newPostList = posts.filter((post) => post.id !== id);
      setPosts(newPostList)
    }
  
    return (
      <div className="app">
        <Navbar />
        <Slider />
        <div className="sidebar">
          <button onClick={toggleForm}>
            {showForm ? "Hide form" : "Add post"}
          </button>
          {showForm ? <NewContent onAddPost={handleAddPost} /> : null}
        </div>
        <NewContent />
        <PostContainer posts={posts} onDeletePost={handleDeletePost} />
        <Footer />
      </div>
    );
  }
  
  export default App;
