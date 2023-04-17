import React from 'react';

export default function PostDetail({ data }) {
  const imgProp = data && Object.values(data).find(prop => prop.type === "img");
  const titleProp = data && Object.values(data).find(prop => prop.type === "title");

  const imgUrl = imgProp ? imgProp.imageUrl : null;
  const title = titleProp ? titleProp.value : null;

  return (
    <div>
      <img src={imgUrl} alt="Post" />
      <h1>{title}</h1>
    </div>
  );
}
