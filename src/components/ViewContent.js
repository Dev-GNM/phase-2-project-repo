import React from 'react';
import Content from "./Content";

function ViewContent({contents, removeContent, postContent, }) {
  return (
    <div className="content-container">
      {contents.map(content => {
        return (
          <Content 
            key={content.id} 
            content={content} 
            removeContent={removeContent} 
            postContent={postContent}
          />
        )
        })}
    </div>
  );
}

export default ViewContent;
