import React from 'react';


function NewContent({ content, onDeleteContent }) {
  const { id, topic, content, author } = content;

  const [ isRead, setisRead ] = useState(false);

  const toggleRead = () => {
    setisRead((isRead) => !isRead);
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

  return (
    <div id="content-container">
      <div id="form-container">
        <form id="content">
        <label for="topictype">Topic:</label>
    <input type="text" id="top" name="majortopic" placeholder="Your topic.."/>

    <label for="topictype">Add content here:</label>
    <textarea id="your-content" name="content" placeholder="Add content here..."/>


    <input type="submit" value="Submit"/>
        </form>
      </div>

      <div id="render-content">
      <h3>{topic}</h3>
      <p>{content}</p>
      <p>
        <strong>- {author}</strong>
      </p>
      <button onClick={toggleRead}>
        {isRead ? "Read" : "Mark as Read and share"}
      </button>
      <button onClick={onClickDelete} style={{ marginLeft: "10px" }}>
        Delete
      </button>
    </div>
    </div>
  );
}

export default NewContent;
