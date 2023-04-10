import React, { useState } from 'react';
import BlogForm from '../components/BlogEntryForm';
import PostDetailContainer from '../components/PostDetailContainer';

function BlogFormContainer() {
  const [blogData, setBlogData] = useState([]);

  const handleBlogData = (newBlogData) => {
    setBlogData([...blogData, newBlogData]);
  }

  return (
    <div>
      <BlogForm onBlogData={handleBlogData} />
    </div>
  );
}

export default BlogFormContainer;
