import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import PostDetail from './PostDetail';
import Navbar from './Navbar';

export default function PostDetailContainer() {
    const [data, setData] = useState({});

    const { postId } = useParams();

    useEffect(() => {
        const post = posts.find(post => post.id === parseInt(postId));
        if (post) {
            setData(post);
        } else {
            // aquí se podría mostrar un mensaje de error o redirigir a una página de error
        }
    }, [postId]);

    return (
        <>
            <Navbar />
            <div className="container">
                <PostDetail data={data} />;
            </div>
        </>
    )
}