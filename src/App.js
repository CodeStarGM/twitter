import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widgets from "./components/Widgets";
import React, { useState, useEffect } from "react";
import Login from "./components/Login";

const auth = firebase.auth();
function App() {
  const [user, setUser] = useState(() => auth.currentUser);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }

      if (initializing) {
        setInitializing(false);
      }
    });

    //cleanup subscription
    return unsubscribe;
  }, []);

  const signInWithGoogle = async () => {
    //retrive google sign in objects
    const provider = new firebase.auth.GoogleAuthProvider();
    //set the language to the user default lang
    auth.useDeviceLanguage();
    //start sign in method

    try {
      await auth.signInWithPopup(provider);
    } catch (error) {
      console.log(error);
    }
  };

  const signOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (err) {
      console.log(err.message);
    }
  };

  if (initializing) return "loading..";

  return (
    <>
      {/* //Login */}

      {user ? (
        <div className="app">
          {/**sidebar */}
          <Sidebar onclick={signOut} />

          {/**Feed */}

          <Feed user={user} />

          {/** Widget */}
          <Widgets />
        </div>
      ) : (
        <Login event={signInWithGoogle} />
      )}
      {/* //BEM Convention */}
    </>
  );
}

export default App;
