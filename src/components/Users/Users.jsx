import React from "react";
import styleUsers from './Users.module.css';
import axios from "axios";
//import userPhoto from '../../assets/img/user.png';

const Users = (props) => {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items);
        });
    }

    return (
        <div> {props.users.map(user => <div key={user.id}>
            <div className={styleUsers.userBlock}>
                <div></div>
            </div>
            <div>
                {user.followed ? <button onClick={() => { props.unfollow(user.id) }}>Unfollow</button> :
                    <button onClick={() => { props.follow(user.id) }}>Follow</button>}

            </div>
            <span>


            </span>
        </div>)} </div>
    );
}

export default Users;