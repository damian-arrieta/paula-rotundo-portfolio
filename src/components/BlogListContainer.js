import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostList from './PostList';

export default function BlogListContainer() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://blog-db652-default-rtdb.firebaseio.com/.json');
      const responseData = response.data;
      const dataArray = Object.entries(responseData.blogs).map(([id, data]) => ({ ...data, id }));
      setData(dataArray);      
    };    
    fetchData();
  }, []);
  

  console.log(data.id);

  return (
    <div className="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <PostList data={data} />
      </div>
    </div>
  )
}