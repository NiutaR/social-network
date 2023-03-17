import React from "react";
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let posts = [
        {id: 1, message: 'Hi how are you?', likesCount: '12'},
        {id: 2, message: 'Good,good thank you', likesCount: '34'}
    ]
    let postsElements = posts.map(post => (<Post message={post.message} likesCount={post.likesCount}></Post>))
    return (
        <div className={s.postsBlock}>
            <h3>
            My Posts
            </h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
            </div>
            <div>
                <button>Add Post</button>
            </div>
            <div><button>Remove button</button></div>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>



    );
}

export default MyPosts;