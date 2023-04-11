import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostList from './PostList';

export default function BlogListContainer() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://blog-db652-default-rtdb.firebaseio.com/blogs.json');
      const responseData = response.data;
      const dataArray = Object.values(responseData);
      setData(dataArray);
    };    
    fetchData();
  }, []);

  return (
    <div className="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <PostList data={data} />
      </div>
    </div>
  )
}