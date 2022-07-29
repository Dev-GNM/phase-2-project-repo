import React, { useState } from "react";

function Content({ post, onDeletePost }) {

  const { id, topic, content, author } = post;

  const [isImportant, setisImportant] = useState(false);

  const toggleImportant = () => {
    setisImportant((isImportant) => !isImportant);
  };

  function onClickDelete() {
    fetch(`http://localhost:3000/posts${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        onDeletePost(id);
      });
  }

  return (
    <div className="post-container">
      <h3>{topic}</h3>
      <p>{content}</p>
      <p>
        <strong>- {author}</strong>
      </p>
      <button onClick={toggleImportant}>
        {isImportant ? "Mark as important" : "Read"}
      </button>
      <button onClick={onClickDelete} style={{ marginLeft: "10px" }}>
        Delete Post
      </button>
    </div>
  );
}

export default Content;
