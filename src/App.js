import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Views/Home';
import PostDetailContainer from './components/PostDetailContainer';
import Footer from './components/Footer';
import BlogEntryForm from './Views/BlogEntryForm';
import Login from './Views/Login';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/posts/:id' element={<PostDetailContainer />} />
          {user ? (
            <Route path='/form' element={<BlogEntryForm user={user} />} />
          ) : (
            <Route
            path='/login'
            element={<Login setUser={setUser} /> } />
          )}
        </Routes>
      </BrowserRouter>
      <Footer />
</>
);
}

export default App;