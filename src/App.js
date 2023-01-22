
import './App.css';
import PostsTable from './PostTable';
import AddP from './addPost';

function App() {
  return (
    <div className="App">
      <h1>Welcome To Article Management System</h1>
      <AddP />
      <PostsTable />
    </div>
  );
}

export default App;
