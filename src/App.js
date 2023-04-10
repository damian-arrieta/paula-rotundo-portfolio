import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Views/Home';
import PostDetailContainer from './components/PostDetailContainer';
import Footer from './components/Footer';
import BlogFormContainer from './Views/BlogFormContainer';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/post/:postId' element={<PostDetailContainer />} />
          <Route path='/form' element={<BlogFormContainer />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;