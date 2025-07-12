import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { BlogProvider } from './context/BlogContext';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import PostFormPage from './pages/PostFormPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  return (
    <BlogProvider>
      <Router>
        <div className="app">
          <Navbar />
          
          <main className="container">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/posts/:id" element={<PostPage />} />
              
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              
              <Route path="/posts/new" element={
                <PrivateRoute>
                  <PostFormPage />
                </PrivateRoute>
              } />
              
              <Route path="/posts/edit/:id" element={
                <PrivateRoute>
                  <PostFormPage />
                </PrivateRoute>
              } />
              
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
        </div>
      </Router>
    </BlogProvider>
  );
}

export default App;