import { Search } from "@material-ui/icons";
import React from "react";
import "../styles/Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <Search className="widgets__searchIcon" />
        <input type="text" placeholder="Search Twitter" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>Trends For You</h2>

        <TwitterTweetEmbed tweetId={"1432920889482309641"} />

        {/*This is for showing all of your twitter post in one box */}

        {/* <TwitterTimelineEmbed
          sourceType="profile"
          screenName="codestar44"
          options={{ height: 400 }}
        /> */}

        {/*This is for showing all of your twitter post in one box */}

        <TwitterShareButton
          className="tweety"
          url={"https://www.instagram.com/codestargm/"}
          options={{
            text: "#CodestarGM is awesome follow him now to be a smart programmer",
            via: "codestar44",
          }}
        />
      </div>
    </div>
  );
}

export default Widgets;
