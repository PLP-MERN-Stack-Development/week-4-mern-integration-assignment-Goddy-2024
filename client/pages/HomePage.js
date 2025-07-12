import React from 'react';
import PostList from '../components/PostList';
import { useBlog } from '../context/BlogContext';

const HomePage = () => {
  const { isAuthenticated } = useBlog();

  return (
    <div className="home-page">
      <h1>Welcome to the Blog</h1>
      {isAuthenticated && (
        <div className="actions">
          <a href="/posts/new" className="btn btn-primary">
            Create New Post
          </a>
        </div>
      )}
      <PostList />
    </div>
  );
};

export default HomePage;