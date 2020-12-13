import React from "react";
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Header() {
    return (

        <
        div className = "Header" >

        <
        div className = "Header_left" >
        <
        img src = "https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png"
        alt = "" / >
        <
        div className = "input_field" >

        <
        SearchIcon / >

        <
        input type = "text"
        placeholder = "Search Facebook"
        className = "input" / > < /
        div > < /
        div >
        <
        div className = "Header_center" >
        <
        div className = "Header_option--active" > < HomeIcon fontSize = "large" / > < /div > <
        div className = "Header_option" > < FlagIcon fontSize = "large" / > < /div>  <
        div className = "Header_option" > < SubscriptionsIcon fontSize = "large" / > < /div > <
        div className = "Header_option" > < StorefrontIcon fontSize = "large" / > < /div>  <
        div className = "Header_option" > < SupervisedUserCircleIcon fontSize = "large" / > < /div >


        <
        /
        div >

        <
        div className = "Header_right" >
        <
        div className = "Header_info" > < Avatar / >
        <
        h6 > Asong Millenium < /h6>

        <
        /div>

        <
        IconButton >
        <
        AddIcon / >






        <
        /IconButton> <
        IconButton > <
        ForumIcon / > < /IconButton> <
        IconButton > <
        NotificationsActiveIcon / > < /IconButton> <
        IconButton > <
        ExpandMoreIcon / > < /IconButton>




        <
        /div>




        <
        /div>
    );
}

export default Header;