import React, { useState, useEffect } from 'react';
import Card from './Card';
import BlogForm from './BlogForm';
import { Link } from 'react-router-dom';
import { getBlogData } from '../utils/api';
import Header from './Header';

const Home = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogData().then((data) => {
      setBlogs(data);
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  const handleBlogSelect = (blog) => {
    setSelectedBlog(blog);
  }

  return (
    <div className='home-container'>
      <Header />
      <BlogForm handleBlogSelect={handleBlogSelect} />
      <div className='cards-container'>
        {blogs.map((blog, index) => (
          <Link key={blog.id} to={`/posteos/${blog.id}`}>
            <Card entryData={blog} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;