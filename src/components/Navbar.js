import React from 'react';

function Navbar() {
  return (
    <div id="nav-list">
        <div id="home">
        <li><a href="/">Home</a></li>
        </div>
        <div id="new-content">
            <li><a href="/">Add Content</a></li>
        </div>
        <div id="share">
            <li><a href="/">Share</a></li>
            </div>
    </div>
  );
}

export default Navbar;
