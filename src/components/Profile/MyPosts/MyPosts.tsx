import React, {ChangeEvent} from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {ActionsType, addPostActionCreate, PostType, updateNewPostActionCreator} from "../../../Redux/state";

type AddPostType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsType) => void
    // addPost: (message: string) => void
    // updateNewPostText: (message: string) => void
}


const MyPosts: React.FC<AddPostType> = (props) => {
    const postsElements = props.posts.map(p => {
        return <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>
    })

    const addPost = () => {
        props.dispatch(addPostActionCreate(props.newPostText))
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewPostActionCreator(e.currentTarget.value))
    }

    return (
        <div className={classes.postsBlock}>
            <h3>MyPosts</h3>
            <div>
                <textarea
                    onChange={onPostChange}
                    value={props.newPostText}/>
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