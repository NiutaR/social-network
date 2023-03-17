import React from "react";
import s from './Post.module.css';


const Post = (props) => {
    return (

        <div className={s.item}>
            <img src="https://cdn.vox-cdn.com/thumbor/m8BU53wkSiPuTtrPtexjVJYpdSk=/0x0:1980x1320/1400x1050/filters:focal(1141x290:1457x606):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/71757363/avatar6.0.jpg" alt="avatar" />
            {props.message}
            <div>
                <span >{props.likesCount}</span>
            </div>

        </div>

    );
}


export default Post;
