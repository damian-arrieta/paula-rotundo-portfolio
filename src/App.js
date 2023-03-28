import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import BlogDetail from './components/BlogDetail';
import './App.css';

function App() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleBlogSelect = (blog) => {
    setSelectedBlog(blog);
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home handleBlogSelect={handleBlogSelect} />} />
          <Route path='/posteos/:posteoId' element={<BlogDetail selectedBlog={selectedBlog} />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;