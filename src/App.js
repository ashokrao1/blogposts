import React from 'react';
import './App.scss';

import BlogPosts from './modules/blog-post/blog-post-container';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Blog</h1>
      </header>
      <BlogPosts />
      <footer>
      @2015 copyright .all right reserved
      </footer>
    </div>
  );
}

export default App;
