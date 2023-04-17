import React from 'react';

export default function PostDetail({ data }) {
  const imgProp = data && Object.values(data).find(prop => prop.type === "img");
  const titleProp = data && Object.values(data).find(prop => prop.type === "title");

  const imgUrl = imgProp ? imgProp.imageUrl : null;
  const title = titleProp ? titleProp.value : null;

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          {imgUrl && <img src={imgUrl} alt={title} style={{maxWidth: "100%", height: "auto"}} />}
        </div>
        <div className="col-8">
          {title && <h1>{title}</h1>}
          {Object.values(data).map((prop, index) => {
            switch (prop.type) {
              case "img":
                return null;
              case "title":
                return null;
              case "h2":
                return <h2 key={index}>{prop.value}</h2>;
              case "h3":
                return <h3 key={index}>{prop.value}</h3>;
              case "h4":
                return <h4 key={index}>{prop.value}</h4>;
              case "h5":
                return <h5 key={index}>{prop.value}</h5>;
              case "h6":
                return <h6 key={index}>{prop.value}</h6>;
              default:
                return <p key={index}>{prop.value}</p>;
            }
          })}
        </div>
      </div>
    </div>
  );
}
