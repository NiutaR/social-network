import { connect } from "react-redux";
import Users from "./Users";
import { followActionCreator, setUsersAcrionCreator, unfollowActionCreator } from "../../redux/usersReducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAcrionCreator(users));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Users);