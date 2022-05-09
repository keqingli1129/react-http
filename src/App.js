import logo from './logo.svg';
import './App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <PostList></PostList> */}
        <PostForm ></PostForm>
      </header>
    </div>
  );
}

export default App;
