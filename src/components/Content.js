import React, { useState } from "react";

function Content({ content, onDeleteContent, onPostContent }) {
  const { id, topic, content, author } = content;

  const [ isImportant, setisImportant ] = useState(false);

  const toggleImportant = () => {
    setisImportant((isImportant) => !isImportant);
  };
  function onClickDelete() {
    fetch(`http://localhost:8004/poems/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        onDeleteContent(id);
      });
  }

  function onClickPost(){
    fetch(`http://localhost:8004/poems/${id}`, {
      method: "POST",
    })
      .then((r) => r.json())
      .then(() => {
        onPostContent(id);
      });
  }

  return (
    <div>
      <h3>{topic}</h3>
      <p>{content}</p>
      <p>
        <strong>- {author}</strong>
      </p>
      <button onClick={toggleImportant}>
        {isImportant ? "Mark as important" : "Mark as important"}
      </button>
      <button onClick={onClickDelete} style={{ marginLeft: "10px" }}>
        Delete 
      </button>
      <button onClick={onClickPost} style={{ marginLeft: "10px" }}>
        Post 
      </button>
    </div>
  );
}

export default Content;
