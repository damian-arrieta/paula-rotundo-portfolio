import React, { useState } from "react";
import { db } from '../Firebase/config';
import { push, ref, set } from 'firebase/database';
import Navbar from '../components/Navbar';

function BlogEntryForm({ user }) {
  const [blogContent, setBlogContent] = useState([]);
  const [showForm, setShowForm] = useState(true);
  const [contentType, setContentType] = useState("title");
  const [contentValue, setContentValue] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleContentTypeChange = (event) => {
    const selectedType = event.target.value;
    setContentType(selectedType);
    if (selectedType === "img") {
      setContentValue("");
    } else {
      setContentValue("");
      setImageUrl("");
    }
  };

  const handleContentValueChange = (event) => {
    setContentValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    let newContent = {
      type: contentType,
      value: contentValue,
    };
    if (contentType === "img") {
      newContent = {
        ...newContent,
        imageUrl,
      };
    }
    setBlogContent([...blogContent, newContent]);
    setContentValue("");
    setImageUrl("");
  };  

  const handleFinishButtonClick = () => {
    if (blogContent.length > 0) {
      const newBlogRef = push(ref(db, "blogs"));
      const newBlogKey = newBlogRef.key;
      const newBlogData = {};
      blogContent.forEach((content, index) => {
        newBlogData[index] = content;
      });
      set(ref(db, `blogs/${newBlogKey}`), newBlogData);
      console.log("Enviando datos a la API:", newBlogData);
      setBlogContent([]);
    }
  };

  return (
    <>
    <Navbar />
    <div>
      {user ? (
        <div className="container my-5 blog-entry">
        <h2>Crear contenido</h2>
        <hr />
        {showForm && (
          <form onSubmit={handleFormSubmit}>
            <div className="mb-3">
              <label htmlFor="type" className="form-label">
                Tipo de contenido:
              </label>
              <select
                className="form-select"
                id="type"
                name="type"
                value={contentType}
                onChange={handleContentTypeChange}
              >
                <option value="title">H1</option>
                <option value="h2">H2</option>
                <option value="h3">H3</option>
                <option value="h4">H4</option>
                <option value="h5">H5</option>
                <option value="h6">H6</option>
                <option value="p">Párrafo</option>
                <option value="img">Link a imagen</option>
              </select>
            </div>
            {contentType !== "img" && (
              <div className="mb-3">
                <label htmlFor="content" className="form-label">
                  Contenido:
                </label>
                <textarea
                  className="form-control"
                  id="content"
                  name="content"
                  value={contentValue}
                  onChange={handleContentValueChange}
                  required
                ></textarea>
              </div>
            )}
            {contentType === "img" && (
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
              Link de la imagen:
              </label>
              <input
              type="text"
              className="form-control"
              id="image"
              name="image"
              value={imageUrl}
              onChange={(event) => setImageUrl(event.target.value)}
              required
              />
            </div>)}
            <button type="submit" className="btn btn-primary">
            Agregar contenido
            </button>
          </form>
          )}
        <div className="container my-5">
          <h2>Vista previa</h2>
          <hr />
          {blogContent.map((content, index) => (
            <div key={index}>
              {content.type === "title" && (
                <h1>{content.value}</h1>
              )}
              {content.type === "h2" && (
                <h2>{content.value}</h2>
              )}
              {content.type === "h3" && (
                <h3>{content.value}</h3>
              )}
              {content.type === "h4" && (
                <h4>{content.value}</h4>
              )}
              {content.type === "h5" && (
                <h5>{content.value}</h5>
              )}
              {content.type === "h6" && (
                <h6>{content.value}</h6>
              )}
              {content.type === "p" && (
                <p>{content.value}</p>
              )}
              {content.type === "img" && (
                <img src={content.imageUrl} alt="Imagen del blog" />
              )}
            </div>
          ))}
          </div>
          {blogContent.length > 0 && (
          <button
            className="btn btn-success"
            onClick={handleFinishButtonClick}
          >
            Publicar
          </button>
        )}
       </div>
      ) : (
        <h1>No estás autenticado</h1>
      )}
    </div>
    </>
  );
}

export default BlogEntryForm;