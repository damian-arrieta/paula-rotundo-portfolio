import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import PostDetailContainer from '../components/PostDetailContainer';

const Home = () => {
  return (
    <div className='home-container'>
      <Navbar />
      <Header />
      <PostDetailContainer />
    </div>
  );
}

export default Home;
