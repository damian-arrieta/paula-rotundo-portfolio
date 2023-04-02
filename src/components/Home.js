import React from 'react';
import Header from './Header';
import BlogListContainer from './BlogListContainer';
import PostDetailContainer from './PostDetailContainer';

const Home = () => {
  return (
    <div className='home-container'>
      <Header />
      <PostDetailContainer />
    </div>
  );
}

export default Home;
