import React, { useState } from 'react';
import Card from './Card';
import BlogForm from './BlogForm';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleBlogSelect = (blog) => {
    setSelectedBlog(blog);
  }

  return (
    <div className='home-container'>
      <BlogForm handleBlogSelect={handleBlogSelect} />
      <div className='cards-container'>
        {cards.map((card, index) => (
          <Link key={index} to={`/posteos/${index}`}>
            <Card entryData={card} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
