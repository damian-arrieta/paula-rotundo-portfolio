import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import PostDetail from './PostDetail';

const post = [
    {id: 1, image: 'https://mailrelay.com/wp-content/uploads/2018/03/que-es-un-blog-1.png', title: 'Primer Post', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {id: 2, image: 'https://mailrelay.com/wp-content/uploads/2018/03/que-es-un-blog-1.png', title: 'Segundo Post', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
    {id: 3, image: 'https://mailrelay.com/wp-content/uploads/2018/03/que-es-un-blog-1.png', title: 'Tercer Post', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
]

export default function PostDetailContainer() {

    const [data, setData] = useState({});

    const { postId } = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            resolve(post);
        });
        getData.then(res => setData(res.find(post => post.id === parseInt(postId))));
    }, []);

  return (
    <PostDetail data={data} />
  )
}
