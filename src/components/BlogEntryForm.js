import { useState } from "react";

const BlogForm = ({ addEntry }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState([]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedContent = [...content];
    updatedContent[index][name] = value;
    setContent(updatedContent);
  };

  const handleTagChange = (e, index) => {
    const { value } = e.target;
    const updatedContent = [...content];
    updatedContent[index].tag = value;
    setContent(updatedContent);
  };

  const handleAddEntry = () => {
    const entry = {
      title: title,
      content: content
    };
    addEntry(entry);
    setTitle("");
    setContent([]);
  };

  const handleAddTag = () => {
    setContent([...content, { tag: "", content: "" }]);
  };

  const handleDeleteTag = (index) => {
    const updatedContent = [...content];
    updatedContent.splice(index, 1);
    setContent(updatedContent);
  };

  return (
    <div>
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      {content.map((tag, index) => (
        <div key={index}>
          <div className="form-group">
            <label htmlFor={`tag-${index}`}>Select a tag:</label>
            <select
              name={`tag-${index}`}
              id={`tag-${index}`}
              className="form-control"
              value={tag.tag}
              onChange={(e) => handleTagChange(e, index)}
            >
              <option value="">-- Select a tag --</option>
              <option value="h1">H1</option>
              <option value="h2">H2</option>
              <option value="h3">H3</option>
              <option value="h4">H4</option>
              <option value="h5">H5</option>
              <option value="h6">H6</option>
              <option value="p">Paragraph</option>
              <option value="img">Image</option>
            </select>
          </div>

          {tag.tag === "p" ? (
            <div className="form-group">
              <label htmlFor={`content-${index}`}>Content:</label>
              <textarea
                name={`content-${index}`}
                id={`content-${index}`}
                className="form-control"
                rows="4"
                value={tag.content}
                onChange={(e) => handleChange(e, index)}
              ></textarea>
            </div>
          ) : tag.tag === "img" ? (
            <div className="form-group">
              <label htmlFor={`content-${index}`}>Image URL:</label>
              <input
                type="text"
                name={`content-${index}`}
                id={`content-${index}`}
                className="form-control"
                value={tag.content}
                onChange={(e) => handleChange(e, index)}
              />
            </div>
          ) : (
            <div className="form-group">
              <label htmlFor={`content-${index}`}>Content:</label>
              <input
                type="text"
                name={`content-${index}`}
                id={`content-${index}`}
                className="form-control"
                value={tag.content}
                onChange={(e) => handleChange(e, index)}
                />
                </div>
                )}
                      <button className="btn btn-danger" onClick={() => handleDeleteTag(index)}>
        Delete Tag
      </button>
    </div>
  ))}

  <button className="btn btn-primary" onClick={handleAddTag}>
    Add Tag
  </button>

  <button className="btn btn-primary" onClick={handleAddEntry}>
    Add Entry
  </button>
</div>
);
};

export default BlogForm;
