import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            MyPosts
            <div>new post</div><br/>
            <div>
                <Post message="what's up, man" count='3'/>
                <Post message="how are you" count='7'/>
            </div>
        </div>
    )
}

export default MyPosts;