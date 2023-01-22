import React, { useState } from 'react';
import axios from 'axios';
import "./addPost.css";

 function PostsTable() {
 // const [posts, setPosts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

    function handleSubmit(event) {
    event.preventDefault();
    
    const data = { title , body};
    axios
        .post(" https://jsonplaceholder.typicode.com/posts", data)
        .then((response)=>{
            console.log(response);
            event.target.reset();
        })
        .catch((error)=>{
            console.log(error);
        });
  };

  return (
    <div>
      <button onClick={() => setShowForm(true)} className="button1">Add Article</button>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
          <br />
          <label htmlFor="body">Body:</label>
          <input
            type="text"
            id="body"
            value={body}
            onChange={event => setBody(event.target.value)}
          />
          <br />
          <button type="submit" className="button1">Save</button>
          <button type="button" onClick={() => setShowForm(false)} className="button1">
            Cancel
          </button>
        </form>
      )}
      
    </div>
  );
}

export default PostsTable;
