import React from 'react';
import NewsList from './NewsList';
import Header from './Header';
import BlogForm from './BlogForm';

export default function Home() {
  return (
    <>
        <Header />
        <NewsList />
        <BlogForm />
    </>
  )
}
