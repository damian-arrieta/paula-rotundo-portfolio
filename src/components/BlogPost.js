import React from 'react';

export default function BlogPost(props) {
  const { entries } = props;
  
  return (
    <div className="blog-container">
      {entries.map((entry, index) => {
        switch (entry.type) {
          case 'h1':
            return <h1 key={index}>{entry.text}</h1>;
          case 'h2':
            return <h2 key={index}>{entry.text}</h2>;
          case 'h3':
            return <h3 key={index}>{entry.text}</h3>;
          case 'h4':
            return <h4 key={index}>{entry.text}</h4>;
          case 'h5':
            return <h5 key={index}>{entry.text}</h5>;
          case 'h6':
            return <h6 key={index}>{entry.text}</h6>;
          case 'p':
            return <p key={index}>{entry.text}</p>;
          case 'img-blog':
            return <img key={index} src={entry.url} alt={entry.alt} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
