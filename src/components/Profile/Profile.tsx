import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsType, ProfilePageType} from "../../Redux/state";

type ProfileType = {
    profilePage: ProfilePageType
    // addPost: (message: string) => void
    // updateNewPostText: (message: string) => void
    dispatch: (action: ActionsType) => void
}

const Profile: React.FC<ProfileType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                dispatch={props.dispatch}
                // addPost={props.addPost}
                newPostText={props.profilePage.newPostText}
                // updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}

export default Profile;