import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    const postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    const newPostElement = React.createRef()

    function addPost() {
        const text = newPostElement.current.value;
        props.addPost(text)
        newPostElement.current.value = ''
    }

    return (
        <div className={classes.postsBlock}>
            <h3>MyPosts</h3>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div>
                <button onClick={addPost}>add post</button>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;