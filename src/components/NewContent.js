import React, {useState} from 'react';

function NewContent({onAddPost}) {
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
    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        topic: formData.topic,
        content: formData.content,
        author: formData.author,
      }),
    })
      .then((r) => r.json())
      .then((newPost) => {
        onAddPost(newPost);
        setFormData({ ...formData, topic: "", content: "", author: "" });
      });
  }
  return (
    <form onSubmit={handleSubmit} className="new-post-form">
      <input
        value={formData.topic}
        name="topic"
        onChange={handlechange}
        placeholder="Topic"
      />
      <textarea
        value={formData.content}
        name="content"
        onChange={handlechange}
        placeholder="Write your content here..."
        rows={10}
      />
       <input
        value={formData.author}
        name="author"
        onChange={handlechange}
        placeholder="Author"
      />
      <input type="submit" value="Submit post" />
    </form>
  );
}

export default NewContent;
