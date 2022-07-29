import React from 'react';

function Navbar() {
    return (
        <nav id="nav-list">
             <div className="logo">
                <h1>InsightsyHub</h1>
            </div>
            <div className="nav-bar">
            <li><a href="/">Home</a></li>
            <li><a href=".new-post-form">New Post</a></li>
            <li><a href="#footer">My Posts</a></li> 
            <li><a href="#footer">Subscribe</a></li> 
            </div>
          
        </nav>
    );
}

export default Navbar;
