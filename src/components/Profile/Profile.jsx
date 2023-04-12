import React from "react";
import styleProfile from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";



const Profile = (props) => {
    return (
        <div className={styleProfile.content}>
            <ProfileInfo>
            </ProfileInfo>
           <MyPostsContainer store={props.store}></MyPostsContainer>
        </div>
    );
}

export default Profile;