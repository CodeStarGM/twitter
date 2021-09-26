import React from "react";
import "../styles/Sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/Notifications";
import { MailOutline } from "@material-ui/icons";
import { BookmarkBorder } from "@material-ui/icons";
import { ListAlt } from "@material-ui/icons";
import { PermIdentity } from "@material-ui/icons";
import { MoreHoriz } from "@material-ui/icons";
import { Button } from "@material-ui/core";

function Sidebar({ onclick }) {
  return (
    <div className="sidebar">
      {/* Twitter Icon*/}
      <TwitterIcon className="sidebar__twitterIcon" />

      {/**Sidebar Buttons */}

      <SidebarOption active Icon={HomeIcon} text="home" />
      <SidebarOption Icon={SearchIcon} text="Explore" />
      <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
      <SidebarOption Icon={MailOutline} text="Messages" />
      <SidebarOption Icon={BookmarkBorder} text="Bookmarks" />
      <SidebarOption Icon={ListAlt} text="Lists" />
      <SidebarOption Icon={PermIdentity} text="Profile" />
      <SidebarOption Icon={MoreHoriz} text="More" />
      {/**Sidebar Buttons */}

      {/**Button Tweet */}
      <Button
        onClick={onclick}
        variant="outlined"
        className="sidebar__tweet"
        fullWidth
      >
        Sign Out
      </Button>
      {/**Button Tweet */}
    </div>
  );
}

export default Sidebar;
