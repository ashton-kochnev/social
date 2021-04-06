import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <div>{props.message}</div>
            <span>{props.count}</span>
        </div>
    )
}

export default Post;