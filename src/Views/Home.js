import React from 'react';
import Header from '../components/Header';
import PostDetailContainer from '../components/PostDetailContainer';

const Home = () => {
  return (
    <div className='home-container'>
      <Header />
      <PostDetailContainer />
    </div>
  );
}

export default Home;
