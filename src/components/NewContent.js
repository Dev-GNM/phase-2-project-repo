import React from 'react';

function NewContent() {
  return (
    <div id="content-contaner">
      <div id="form-container">
        <form id="content">
        <label for="topictype">Topic:</label>
    <input type="text" id="top" name="majortopic" placeholder="Your topic.."/>

    <label for="topictype">Add content here:</label>
    <textarea id="your-content" name="content" placeholder="Add content here"/>


    <input type="submit" value="Submit"/>
        </form>
      </div>

      <div id="render-content">
        <h2>Empty div</h2>
      </div>
    </div>
  );
}

export default NewContent;
