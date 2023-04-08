import React from 'react';
import Header from '../components/Header';
import BlogListContainer from '../components/BlogListContainer';

const Home = () => {
  return (
    <div className='home-container'>
      <Header />
      <BlogListContainer />
    </div>
  );
}

export default Home;
