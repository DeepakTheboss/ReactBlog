import { Link } from "react-router-dom";
import { firestore } from "../firebase";
import { useState ,useEffect } from "react";
import ds from './button.module.css'
import styled from 'styled-components';

//this styled components will return an React component
//here that is "BlogHeading"
 
const BlogHeading = styled.h1`
 text-align: center;
  color: red;
  margin-bottom: 2px;
`;

const Post = styled.div`
border: 1px solid #e1e1e1;
padding: 10px 10px;
border-radius: 5px;
margin-top: 10px;
{/* applying hovering to  className = "post"*/}
&:hover {
  border: 1px solid #2196f3;
}

h3 {
  margin: 0;
  padding: 0;
  font-size: 25px;
  font-weight: bold;
  color: black;
}

 a {
  text-decoration: none;
 }

 @media (max-width: 800px) {
  border: 1px solid black;
 }
`;

 
function Home() {
  const [posts, setPosts] = useState([]);
  
  useEffect(()=> {
    firestore.collection('posts')
    .get()
    .then(snapshot =>{
      console.log("snapshpt", snapshot);
      const posts = snapshot.docs.map((doc)=> {
        console.log(doc.data);
        return {
          id: doc.id,
          ...doc.data(),
        };
        
      });
     // console.log("posts", posts);
     setPosts(posts);
    });
   
    
  }, []);

  return (
    <div className="home">
      <BlogHeading>Tech Blog</BlogHeading>
      {/* <button className={ds.createPostBtn}>Add Photo</button> */}
      <div id="blog-by">Manohar</div>
  
      {posts.map((e, index) => {
        console.log(e);
        return (

          // before styled components
          // <div className="post" key={`post-${index}`}>
            
          //   <Link to={`/post/${e.id}`}>
          //     <h3>{e.title}</h3>
          //   </Link>
          //   <p>{e.subTitle}</p>
          // </div>
      

          //after styled components
          <Post className="post" key={`post-${index}`}>
            <Link to={`/post/${e.id}`}>
              <h3>{e.title}</h3>
            </Link>
            <p>{e.subTitle}</p>
          </Post>

        );
      })}
    </div>
  );
  
  }
  
  export default Home;