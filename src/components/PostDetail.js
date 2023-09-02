import { useEffect, useState } from "react";
import { firestore } from "../firebase";
import {useParams} from 'react-router-dom'  
// we are getting documents-id from url hence we are using useParam

//import Radium from 'radium';

//raduim is Higher order Component (HOC)
///HOC is simply which takes one component as an argument and return an Component.


function PostDetail() {
  const [post, setPost] = useState({});
  const {postId} = useParams(); 
  // the postId exactly similar to "/post/:postId" form App.js

  useEffect(()=> {
    firestore.collection('posts').doc(postId).get().then((snapshot) =>{
      console.log('snapshot',snapshot.data());
      setPost(snapshot.data())
    });
  },[])

      return (
      <div className="post-detail">
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </div>
    );
  }
  
  export default PostDetail;

  // const styles = {
  //   heading: {
  //     textAlign: 'center',
  //     margin:0,
  //     ':hover': {
  //       color:'red'
  //     },

  //   },

  //   postDetail: {
  //     border:'1px solid #e1e1e1',
  //     padding:5,
  //     paddingTop:5,
  //     borderRadius:5,

  //     '@media(max-width: 720px)': {
  //       color:'pink'
  //     }
  //   }
  // }