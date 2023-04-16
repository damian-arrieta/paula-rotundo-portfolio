import React from 'react';
import { Link } from 'react-router-dom';

export default function Post({ info }) {

  const imgProp = Object.values(info).find(prop => prop.type === "img");
  const titleProp = Object.values(info).find(prop => prop.type === "title");

  const imgUrl = imgProp ? imgProp.imageUrl : null;
  const title = titleProp ? titleProp.value : null;

  return (
    <div className="col">
      <Link to={`/posts/${info.id}`}>
        <div className="card shadow-sm">
          {imgUrl && <img src={imgUrl} className="bd-placeholder-img card-img-top" width="100%" height="225" alt={title} />}
          <div className="card-body">
            {title && <h2 className="card-text text-center text-decoration-none">{title}</h2>}
          </div>
        </div>
      </Link>
    </div>
  )
}

