import React from 'react';

const Post = (props) => {
    return (
        <div>
            <div>{props.message}</div>
            <span>like {props.likesCount}</span>
        </div>
    )
}

export default Post;