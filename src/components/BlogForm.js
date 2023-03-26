import React, { useState } from 'react';

const BlogForm = () => {
  const [entries, setEntries] = useState([{ type: 'h1', text: '' }]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Envía la información a la base de datos
  }

  const handleAddEntry = (event) => {
    event.preventDefault();
    const newEntry = { type: 'p', text: '' };
    setEntries([...entries, newEntry]);
  }

  const handleRemoveEntry = (index) => {
    const newEntries = [...entries];
    newEntries.splice(index, 1);
    setEntries(newEntries);
  }

  const handleEntryChange = (index, event) => {
    const newEntries = [...entries];
    newEntries[index].text = event.target.value;
    setEntries(newEntries);
  }

  return (
    <form onSubmit={handleSubmit} className='form-container'>
      <h3>Escribe una nueva publicación al Blog:</h3>
      {entries.map((entry, index) => (
        <div key={index} className="entry">
          <select
            value={entry.type}
            onChange={(event) => {
              const newEntries = [...entries];
              newEntries[index].type = event.target.value;
              setEntries(newEntries);
              }}
            >
              <option value="h1">H1</option>
              <option value="h2">H2</option>
              <option value="h3">H3</option>
              <option value="h4">H4</option>
              <option value="h5">H5</option>
              <option value="h6">H6</option>
              <option value="p">Párrafo</option>
              <option value="img-blog">Imagen de Blog</option>
              <option value="img-card">Imagen de Card</option>
            </select>
            <input
              className='form-control'
              type="text"
              value={entry.text}
              onChange={(event) => handleEntryChange(index, event)}
            />
            <button type="button" onClick={() => handleRemoveEntry(index)}>
              <i className="bi bi-x-circle"></i>
            </button>
            <button type="button" onClick={handleAddEntry} className="add-entry">
              <i className="bi bi-plus-circle"></i>
            </button>
          </div>
        ))}
          <div className="button-group">
            <button type="submit" className="submit">
              Subir al blog
            </button>
          </div>
    </form>
  );
};

export default BlogForm;
