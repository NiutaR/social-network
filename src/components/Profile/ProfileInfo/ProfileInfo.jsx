import React from "react";
import styleProfileInfo from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={styleProfileInfo.content}>
        <div className={styleProfileInfo.contentImg}>
           <img src="https://images.unsplash.com/photo-1536069221282-d877868cad6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MTc5Mjk3fHxlbnwwfHx8fA%3D%3D&dpr=1&auto=format&fit=crop&w=294&q=60" alt="plants" />
        </div>
       <div className={styleProfileInfo.decriptionBlock}>ava + descr</div>
       </div>
    );
}

export default ProfileInfo;