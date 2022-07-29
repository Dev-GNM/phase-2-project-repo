import React, { useState } from "react";

function MyPosts({ post, onDeletePost}) {
  const { id, topic, content, author } = post;

  const [ isShared, setisShared ] = useState(false);

  const toggleShared = () => {
    setisShared((isShared) => !isShared);
  };
  function onClickDelete() {
    fetch(`http://localhost:3000/posts/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        onDeletePost(id);
      });
  }

  return (
    <div>
      <h3>{topic}</h3>
      <p>{content}</p>
      <p>
        <strong>- {author}</strong>
      </p>
      <button onClick={toggleShared}>
        {isShared ? "Mark as Unshared" : "Mark as shared"}
      </button>
      <button onClick={onClickDelete} style={{ marginLeft: "10px" }}>
        Delete Post
      </button>
    </div>
  );
}

export default MyPosts;