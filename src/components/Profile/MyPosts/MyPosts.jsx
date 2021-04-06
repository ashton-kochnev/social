import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={classes.postsBlock}>
            <h3>MyPosts</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>add post</button>
            </div>
            <div className={classes.posts}>
                <Post message="what's up, man" count='3'/>
                <Post message="how are you" count='7'/>
            </div>
        </div>
    )
}

export default MyPosts;