import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core"


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
        /div>
    );
}

export default Post;