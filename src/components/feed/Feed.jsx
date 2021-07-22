import React, { useEffect, useState } from 'react';
import './feed.css';
import Inputs from '../input/Inputs';
import Post from '../post/Post';
import { db } from '../../features/firebase/firebase';
import firebase from 'firebase';
import{ selectUser } from '../../features/userSlice';
import { useSelector } from "react-redux";
import FlipMove from 'react-flip-move';

function Feed() {
    const [posts, setPosts] = useState([]);
    const user = useSelector(selectUser);

    useEffect(() =>{
        db.collection("posts")
        .orderBy('timeStamp', 'desc')
        .onSnapshot(snapShot => (
            setPosts(snapShot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )
            ))
        ))
    }, []);

    const sendPost = (e, message) => {
        e.preventDefault();
        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: message,
            photoUrl: user.photoUrl || "",
            timeStamp: firebase.firestore.FieldValue.serverTimestamp()
        });
    }
    return (
        <div className="Feed">
            <Inputs send={sendPost} />
            <FlipMove>
                {posts.map(({ id, data: { name, description, message, photoUrl } }) =>(
                    <Post 
                        key={id}
                        name={name}
                        description={description}
                        message={message}
                        photoUrl={photoUrl}
                    />
                ))}
            </FlipMove>
        </div>
    )
}

export default Feed;
