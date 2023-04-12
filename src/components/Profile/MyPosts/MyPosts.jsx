import React from "react";
import stylePosts from './MyPosts.module.css';
import Post from './Post/PostItem';

const MyPosts = (props) => {
    let postsElements = props.posts.map(post => (
        <Post message={post.message} likesCount={post.likesCount} />
    ));
    let newPostElement = React.createRef();
    let onAddPost = () => {
        props.addPost();
    };
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };
    return (
        <div className={stylePosts.postsBlock}>
            <h3>
            My Posts
            </h3>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}></textarea>
                </div>
            </div>
            <div>
                <button onClick={onAddPost}>Add Post</button>
            </div>
            <div><button>Remove button</button></div>

            <div className={stylePosts.posts}>
                {postsElements}
            </div>
        </div>



    );
}

export default MyPosts;