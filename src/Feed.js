import React from "react";
import "./Feed.css";
import StoryReal from "./StoryReal";
import MessageSend from "./MessageSend";
import Post from "./Post";

function Feed() {
    return ( <
        div className = "Feed" >


        <
        StoryReal / >
        <
        MessageSend / >

        <
        Post profilePic = "https://z-p3-scontent.fdla2-1.fna.fbcdn.net/v/t1.0-9/p843x403/79923403_1060157574327240_5602927606639886336_o.jpg?_nc_cat=109&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeFSvA1hAO5nC-hlM3s05wORgoVjDPxKVymChWMM_EpXKfnYDYtsS9TXD09v2eow5jEPelc5wDtvAZAayOdx82M4&_nc_ohc=qkdAiDpEGJwAX856dYV&_nc_ht=z-p3-scontent.fdla2-1.fna&tp=6&oh=0bf2ae2cd03c89656520036ed0c357bf&oe=5FFB5F94"
        message = "This is glorious"
        timeStamp = "timestamp is here"
        userName = "Asong Millenium"
        image = "https://z-p3-scontent.fdla2-1.fna.fbcdn.net/v/t1.0-9/131472140_1364362050573456_5330363117191375064_n.jpg?_nc_cat=107&ccb=2&_nc_sid=730e14&_nc_eui2=AeEiO9l_mp0Zs7v0AXT8tN54rQKhhrYYaVOtAqGGthhpUzSXlT9wLvi54td2gtMu592DPgG-GGDYzsyc8LDlwY_3&_nc_ohc=rrOeAGN-MyYAX-3RkbO&_nc_ht=z-p3-scontent.fdla2-1.fna&oh=569f26adb47f34d03fcbbf4f15b76836&oe=5FFDD85C" / >
        <
        Post profilePic = "https://z-p3-scontent.fdla2-1.fna.fbcdn.net/v/t1.0-9/p843x403/79923403_1060157574327240_5602927606639886336_o.jpg?_nc_cat=109&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeFSvA1hAO5nC-hlM3s05wORgoVjDPxKVymChWMM_EpXKfnYDYtsS9TXD09v2eow5jEPelc5wDtvAZAayOdx82M4&_nc_ohc=qkdAiDpEGJwAX856dYV&_nc_ht=z-p3-scontent.fdla2-1.fna&tp=6&oh=0bf2ae2cd03c89656520036ed0c357bf&oe=5FFB5F94"
        message = "This is glorious"
        timeStamp = "timestamp is here"
        userName = "Asong Millenium"
        image = "https://z-p3-scontent.fdla2-1.fna.fbcdn.net/v/t1.0-9/p843x403/79923403_1060157574327240_5602927606639886336_o.jpg?_nc_cat=109&ccb=2&_nc_sid=8bfeb9&_nc_eui2=AeFSvA1hAO5nC-hlM3s05wORgoVjDPxKVymChWMM_EpXKfnYDYtsS9TXD09v2eow5jEPelc5wDtvAZAayOdx82M4&_nc_ohc=qkdAiDpEGJwAX856dYV&_nc_ht=z-p3-scontent.fdla2-1.fna&tp=6&oh=0bf2ae2cd03c89656520036ed0c357bf&oe=5FFB5F94" / >
        <
        Post profilePic = ""
        message = "This is glorious"
        timeStamp = "timestamp is here"
        userName = "Asong Millenium"
        image = "" / >
        <
        Post profilePic = ""
        message = "This is glorious"
        timeStamp = "timestamp is here"
        userName = "Asong Millenium"
        image = "" / >


        <
        / div >
    );
}

export default Feed;