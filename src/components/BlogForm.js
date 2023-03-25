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
    <form onSubmit={handleSubmit}>
      {entries.map((entry, index) => (
        <div key={index}>
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
            <option value="imagen">Imagen</option>
          </select>
          <input
            type="text"
            value={entry.text}
            onChange={(event) => handleEntryChange(index, event)}
          />
          <button type="button" onClick={() => handleRemoveEntry(index)}>
            Eliminar
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAddEntry}>
        Agregar entrada
      </button>
      <button type="submit">Subir al blog</button>
    </form>
  );
};

export default BlogForm;
