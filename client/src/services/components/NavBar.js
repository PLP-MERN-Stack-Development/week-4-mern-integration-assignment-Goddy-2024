import React from 'react';
import { Link } from 'react-router-dom';
import { useBlog } from '../context/BlogContext';

const Navbar = () => {
  const { user, isAuthenticated, logout } = useBlog();

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">MERN Blog</Link>
        
        <div className="navbar-links">
          {isAuthenticated ? (
            <>
              <Link to="/posts/new">New Post</Link>
              <span>Welcome, {user?.username}</span>
              <button onClick={logout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;