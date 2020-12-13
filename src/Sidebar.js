import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

import PeopleIcon from '@material-ui/icons/People';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMore';


function Sidebar() {
    return (

        <
        div className = "Sidebar" >
        <
        SidebarRow src = "https://z-p3-scontent.fdla2-1.fna.fbcdn.net/v/t1.0-9/80187351_1060152157661115_6609379898840580096_o.jpg?_nc_cat=101&ccb=2&_nc_sid=174925&_nc_eui2=AeHf6ykgcXWDn3c36a1UcSkMyPY9nGVdLGTI9j2cZV0sZPB6TENn3u-vIlUuFzdjSc69oOnDymEesN5aWI_yjxGR&_nc_ohc=htjOYXjz5HIAX-u6Gx2&_nc_ht=z-p3-scontent.fdla2-1.fna&oh=38f96bfe1096e8d244fbc6b1e649a033&oe=5FFADF8C"
        title = "Asong Millenium" /
        >
        <
        SidebarRow Icon = {
            LocalHospitalIcon
        }
        title = "Covid-19 Information Center" / > <
        SidebarRow Icon = { EmojiFlagsIcon }
        title = "Pages" / > <
        SidebarRow Icon = { PeopleIcon }
        title = "Friends" / >
        <
        SidebarRow Icon = { ChatBubbleIcon }
        title = "Messenger" / >

        <
        SidebarRow Icon = { StorefrontIcon }
        title = "Marketplace" / >
        <
        SidebarRow Icon = { VideoLibraryIcon }
        title = "Videos" / >
        <
        SidebarRow Icon = { PeopleIcon }
        title = "Friends" / >
        <
        SidebarRow Icon = { ExpandMoreOutlinedIcon }
        title = "Marketplace" / >



        <
        /div>
    );
}
export default Sidebar;