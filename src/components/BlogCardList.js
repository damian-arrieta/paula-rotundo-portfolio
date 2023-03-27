import React from 'react';
import Card from './Card';

const BlogCardList = ({ entries }) => {
  
  const cardList = entries.map((entry, index) => (
    <Card key={index} entryData={entry} />
  ));

  return (
    <div className="card-list">
      {cardList}
    </div>
  );
};

export default BlogCardList;
