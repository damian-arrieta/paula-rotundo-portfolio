import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getBlogById } from '../utils/api';

const BlogDetail = () => {
  const { postId } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const blogData = await getBlogById(postId);
      setBlog(blogData);
    };
    fetchBlog();
  }, [postId]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="blog-detail-container">
      <h1 className="blog-detail-title">{blog.title}</h1>
      {blog.entries.map((entry, index) => {
        if (entry.type === 'h1') {
          return <h1 key={index} className="blog-detail-entry">{entry.text}</h1>;
        } else if (entry.type === 'h2') {
          return <h2 key={index} className="blog-detail-entry">{entry.text}</h2>;
        } else if (entry.type === 'h3') {
          return <h3 key={index} className="blog-detail-entry">{entry.text}</h3>;
        } else if (entry.type === 'h4') {
          return <h4 key={index} className="blog-detail-entry">{entry.text}</h4>;
        } else if (entry.type === 'h5') {
          return <h5 key={index} className="blog-detail-entry">{entry.text}</h5>;
        } else if (entry.type === 'h6') {
          return <h6 key={index} className="blog-detail-entry">{entry.text}</h6>;
        } else if (entry.type === 'p') {
          return <p key={index} className="blog-detail-entry">{entry.text}</p>;
        } else if (entry.type === 'img-blog') {
          return <img key={index} className="blog-detail-entry" src={entry.text} alt="blog-post" />;
        } else if (entry.type === 'img-card') {
          return <img key={index} className="blog-detail-thumbnail" src={entry.text} alt="blog-post" />;
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default BlogDetail;