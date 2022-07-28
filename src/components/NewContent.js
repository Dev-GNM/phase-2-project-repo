import React, {useState} from 'react';

function NewContent({ onAddContent }) {
  const [formData, setFormData] = useState({
    topic: "",
    content: "",
    author: "",
  });
  function handlechange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:8004/poems", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: formData.title,
        content: formData.content,
        author: formData.author,
      }),
    })
      .then((r) => r.json())
      .then((newContent) => {
        onAddContent(newContent);
        setFormData({ ...formData, title: "", author: "", content: "" });
      });
  }
  return (
    <form onSubmit={handleSubmit} className="new-content-form">
      <input
        value={formData.title}
        name="topic"
        onChange={handlechange}
        placeholder="Topic"
      />
      <input
        value={formData.author}
        name="author"
        onChange={handlechange}
        placeholder="Author"
      />
      <textarea
        value={formData.content}
        name="content"
        onChange={handlechange}
        placeholder="Write your content here..."
        rows={10}
      />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default NewContent;
