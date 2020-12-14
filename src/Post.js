import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NearMeIcon from '@material-ui/icons/NearMe';
import
ExpandMoreIcon
from '@material-ui/icons/ExpandMore';

function Post({ profilePic, image, userName, timeStamp, message }) {
    return ( <
        div className = "Post" >

        <
        div className = "post_top" >
        <
        Avatar src = {
            profilePic
        }
        className = "post_avatar" / >

        <
        div className = "post_topinfo" >
        <
        h3 > { userName } < /h3>  <
        p > timeStamp... < /p>

        <
        /div >

        <
        /div>

        <
        div className = "post_bottom" >
        <
        p > { message } < /p> < /
        div >


        <
        div className = "post_image" >

        <
        img src = { image }
        alt = "" / >
        <
        /
        div >

        <
        div className = "post_options" >
        <
        div className = "post_option" >
        <
        ThumbUpIcon / >
        <
        p > Like < /p>


        <
        /div>


        <
        div className = "post_option" > < ChatBubbleOutlineIcon / >
        <
        p > Comment < /p>

        <
        /div > <
        div className = "post_option" > < NearMeIcon / >
        <
        p > Share < /p> < /
        div > <
        div className = "post_option" > < AccountCircleIcon / >
        <
        ExpandMoreIcon / >


        <
        /
        div >



        <
        /div>

        <
        /div>
    );
}

export default Post;