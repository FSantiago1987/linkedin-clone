import React, {useState} from 'react';
import './inputs.css';
import CreateIcon from "@material-ui/icons/Create";
import InputOptions from './InputOptions';
import { Image, Subscriptions, EventNote, CalendarViewDay } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';
import{ selectUser } from '../../features/userSlice';
import { useSelector } from "react-redux";

function Inputs({ send }) {
    const [input, setInput] = useState('');
    const user = useSelector(selectUser);
    return (
            <div className="feed-inputContainer">
                <div className="feed-post">
                    <div className="feed-avatar">
                        <Avatar src={user.photoUrl}>{user.displayName[0]}</Avatar>
                    </div>
                    <div className="feed-input">
                        <CreateIcon />
                        <form>
                            <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder="Start a post" />
                            <button onClick={e => {send(e, input); setInput('')}} type="submit">Send</button>
                        </form>
                    </div>
                </div>
                <div className="feed-inputOptions">
                    <InputOptions Icon={Image} title="Photo" color="#70B5F9" />
                    <InputOptions Icon={Subscriptions} title="Video" color="#E7A33E" />
                    <InputOptions Icon={EventNote} title="Event" color="#C0CBCD" />
                    <InputOptions Icon={CalendarViewDay} title="Write article" color="#7FC15E" />
                </div>
            </div>
    )
}

export default Inputs;