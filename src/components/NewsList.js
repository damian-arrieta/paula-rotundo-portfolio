import React, { useState } from 'react';
import Card from './Card';

export default function NewsList() {

  return (
    <section className="news">
    <div className="grid">
        <div className="news-title">
            <h2 className="text-black">Blog</h2>
        </div>
        <div className="cards">
            {
                blogEntry.map( entry => <Card entryData={ entry } />)
            }
        </div>
    </div>
</section>
  )
}
