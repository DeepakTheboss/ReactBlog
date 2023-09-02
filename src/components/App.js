import {Routes, Route} from 'react-router-dom';
import CreatePost from './CreatePost';
import PostDetail from './PostDetail';
import Home from './Home';
import NavBar from './NavBar';

//import {StyleRoot} from 'radium';


function App() {
  return (
//<StyleRoot>
    <div className="container">
      <NavBar />
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/post/:postId" element = {<PostDetail/>}/>
        <Route path = "/create-post" element = {<CreatePost/>}/>
      </Routes>
    </div>
    //</StyleRoot>
  );
}

export default App;
