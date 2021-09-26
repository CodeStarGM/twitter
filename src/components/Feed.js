import React, { useState, useEffect } from "react";
import "../styles/Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import db from "../firebase";
import FlipMove from "react-flip-move";
function Feed({ user }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("createdAt", "desc")
      .limit(100)
      .onSnapshot((snapshot) => {
        setPosts(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      {/* TweetBoc */}
      <TweetBox user={user} />
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.photoURL}
            image={post.image}
          />
        ))}
      </FlipMove>

      {/* Post */}
    </div>
  );
}

export default Feed;
