import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={s.content}>
        <div className={s.contentImg}>
           <img src="https://images.unsplash.com/photo-1536069221282-d877868cad6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MTc5Mjk3fHxlbnwwfHx8fA%3D%3D&dpr=1&auto=format&fit=crop&w=294&q=60" alt="plants" />
        </div>
       <div className={s.decriptionBlock}>ava + descr</div>
       </div>
    );
}

export default ProfileInfo;