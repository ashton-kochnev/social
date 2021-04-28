import React from 'react';
import {PostType} from "../../../../Redux/state";

const Post: React.FC<PostType> = (props) => {
    return (
        <div>
            <div>{props.message}</div>
            <span>like {props.likesCount}</span>
        </div>
    )
}

export default Post;