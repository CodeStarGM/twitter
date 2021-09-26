import React, { useState } from "react";
import "../styles/TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "../firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
function TweetBox({ user }) {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const { displayName, photoURL } = user;

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName,
      username: `${displayName}44`,
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      photoURL,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src={photoURL} />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            type="text"
            placeholder="Whats Happening"
            maxlength="40"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          type="text"
          placeholder="Optional: Enter image URL to Post"
          className="tweetBox__imageInput"
        />
        <Button
          type="submit"
          onClick={sendTweet}
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
