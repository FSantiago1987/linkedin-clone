import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Feed from "./components/feed/Feed";
import Widgets from "./components/widgets/Widgets";
import { useSelector } from "react-redux";
import { selectUser, logout, login } from "./features/userSlice";
import Login from './components/login/Login';
import { auth } from "./features/firebase/firebase";
import { useDispatch } from "react-redux";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

useEffect(() => {
  auth.onAuthStateChanged((userAuth) => {
    if(userAuth) {
      if(userAuth.photoURL === null)
        return;
      console.log(userAuth);
      dispatch(login({
        email:userAuth.email,
        uid: userAuth.uid,
        displayName: userAuth.displayName,
        photoUrl: userAuth.photoURL
      }));
    } else {
      dispatch(logout())
    }
  })
}, [dispatch]);

  return (
    <div className="App">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app-body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
