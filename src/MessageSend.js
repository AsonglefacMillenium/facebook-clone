import React from "react";
import "./MessageSend.css";
import { Avatar } from "@material-ui/core";
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import {
    useState
} from "react";


function MessageSend() {

    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handlesubmit = (e) => {
        e.preventDefault();

        setInput("");
        setImageUrl("");
    };

    return ( <
        div className = "MessageSend" >
        <
        div className = "MessageSend_top" >

        <
        Avatar / >
        <
        form >
        <
        input value = { input }
        onChange = {
            e => setInput(e.target.value)
        }
        className = "MessageSend_input"
        placeholder = "What's on your mind?" / >

        <
        input value = { imageUrl }
        onChange = {
            e => setImageUrl(e.target.value)
        }
        placeholder = "Image URL {Optional}" /
        >

        <
        button onClick = { handlesubmit }
        type = "submit" > Hidden Submit < /button>


        <
        /form>

        <
        /div>  


        <
        div className = "MessageSend_bottom" >
        <
        div className = "MessageSend_option" >
        <
        VideocamIcon style = {
            { color: "red" }
        }
        / >

        <
        h4 > Live Video < /h4>



        <

        /
        div >

        <
        div className = "MessageSend_option" >
        <
        PhotoLibraryIcon style = {
            { color: "green" }
        }
        / >

        <
        h4 > Photo / Video < /h4>


        <
        /div>

        <
        div className = "MessageSend_option" >
        <
        InsertEmoticonIcon style = {
            { color: "orange" }
        }
        / >

        <
        h4 > Feeling / Activity < /h4>


        <
        /div>

        <
        /div>

        <
        /div>


    );
}


export default MessageSend;