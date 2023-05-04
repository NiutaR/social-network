import React from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import styleProfileInfo from "./ProfileInfo.module.css";

interface ProfileInfoProps {
    avatarSrc: string;
    username: string;
    about: string;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({
    avatarSrc,
    username,
    about,
}) => {
    return (
        <div className={styleProfileInfo.content}>
            <div className={styleProfileInfo.decriptionBlock}>
                <Avatar size={64} src={avatarSrc} icon={<UserOutlined />} />
                <h2>{username}</h2>
                <p>{about}</p>
            </div>
        </div>
    );
};

export default ProfileInfo;
