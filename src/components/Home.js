import React from 'react';
import Header from './Header';
import BlogListContainer from './BlogListContainer';

const Home = () => {
  return (
    <div className='home-container'>
      <Header />
      <BlogListContainer />
    </div>
  );
}

export default Home;
