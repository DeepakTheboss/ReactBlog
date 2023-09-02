import { useState } from "react";
import { firestore } from "../firebase";
import { useFormInput } from "../hooks";
// import  css from './button.module.css';

import styled, {css} from 'styled-components';

const StyledButton = styled.button`
    height: 33px;
    // we can apply only 1 css property like this.
    background: ${(props) => 
        (props.primary ? 'red' :'yellow')};
    border: 0;
    color: #fff;
    padding: 8px;
    font-size: 15px;
    border-radius: 3px;
    cursor: pointer;
// we can apply mulline css propery via props.
    ${(props) => props.primary && 
    css`
    border: 2px solid ${props.bgColor};
    `}
`;

//now StyledButton is an Component itself.
//If we want to pass any argument from this components then we have to catch using props
// or it's called as Dynamic styling.

//then like above we have to do it.


function CreatePost() {
    const title = useFormInput('');
    const subTitle = useFormInput('');
    const content = useFormInput('');

    function handleSubmit (e) {
        e.preventDefault();  
 
        console.log('title',title);
        console.log('subtitle', subTitle);
        console.log('content',content);

        firestore.collection('posts').add({
            title:title.value,
            content: content.value,
            subTitle: subTitle.value,
            createdAt: new Date()
        })
    }

    return (
      <div className="create-post">
        <h1>Create Post</h1>
       <form onSubmit = {handleSubmit}>
        <div className="form-field">
            <label>Title</label>
            {/* <input value={title} onChange = {(e) => setTitle(e.target.value)}/> */}
            <input {...title}/>
        </div>

        <div className="form-field">
            <label>Sub Title</label>
            {/* <input value={subTitle} onChange = {(e) => setSubTitle(e.target.value)}/> */}
            <input {...subTitle}/>
        </div>

        <div className="form-field">
            <label>Content</label>
            {/* <textarea value={content} onChange = {(e) => setContent(e.target.value)}></textarea> */}
            <textarea {...content}/>
        </div>

        {/* <button className={css.createPostBtn}>Create Post</button> */}
        <StyledButton primary bgColor= 'black'>Create Post</StyledButton>
       </form>
      </div>
    );
  }
  
  export default CreatePost;