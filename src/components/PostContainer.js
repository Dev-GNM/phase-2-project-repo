import React from 'react';
import MyPosts from './MyPosts';

 function PostContainer({ posts, removePost }) {
  return (
    <div className="post-container">
         {posts.map(post => {
        return (
          <MyPosts 
            key={post.id} 
            post={post} 
            removePost={removePost} 
          />
        )
    })}
    </div>
  );
}


export default PostContainer;
