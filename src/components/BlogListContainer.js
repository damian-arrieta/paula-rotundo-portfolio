import { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import PostList from './PostList';

export default function BlogListContainer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const blogRef = ref(db, 'blogs');
  
    onValue(blogRef, (snapshot) => {
      const data = snapshot.val();
      const blogData = Object.keys(data).map((key) => {
        return { id: key, ...data[key] };
      });
      setData(blogData);
    });
  }, []);

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <PostList data={data} />
      </div>
    </div>
  );
}
