import React from 'react';
import { Link } from 'react-router-dom';

export default function Post({info, id}) {
  const titleObj = info.content.find(item => item.type === 'title');
  const imageObj = info.content.find(item => item.type === 'img' && item.imageUrl);

  console.log('ID:', id); // Agregamos esto para verificar que se recibe el ID correctamente

  return (
    <div className="col">
      <Link to={`/post/${id}`}>
        <div className="card shadow-sm">
        <img src={imageObj.imageUrl} className="bd-placeholder-img card-img-top" width="100%" height="225" alt={titleObj.value} />
          <div className="card-body">
            <h2 className="card-text text-center text-decoration-none">{titleObj.value}</h2>
          </div>
        </div>
      </Link>
    </div>
  )
}
