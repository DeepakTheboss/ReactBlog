import { Link } from "react-router-dom";

function NavBar() {
    return (
      <div >
       <ul id = "nav">
        <li>
        <Link to ="/">Home</Link>
        </li>
        <li>
        <Link to ="/create-post">CreatePost</Link>
        </li>
        <li>
        <Link to ="/post/:postId">PostDetail</Link>
        </li>
       </ul>
      
      </div>
    );
  }
  
  export default NavBar;