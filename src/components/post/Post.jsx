import React, { forwardRef } from 'react';
import './post.css';
import { Avatar } from '@material-ui/core';
import InputOptions from '../input/InputOptions';
import { ThumbUpAltOutlined, ChatOutlined, ShareOutlined, SendOutlined } from '@material-ui/icons';


const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
    
    return (
        <div ref={ref} className="Post">
            <div className="Post-header">                
                <Avatar src={photoUrl}>{name[0]}</Avatar>
                <div className="Post-info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="Post-body">
                <p>{message}</p>
            </div>
            <div className="Post-button">
                <InputOptions Icon={ThumbUpAltOutlined} title='Like' color="gray" />
                <InputOptions Icon={ChatOutlined} title='Comment' color="gray" />
                <InputOptions Icon={ShareOutlined} title='Share' color="gray" />
                <InputOptions Icon={SendOutlined} title='Send' color="gray" />
            </div>
        </div>
    )
})

export default Post
