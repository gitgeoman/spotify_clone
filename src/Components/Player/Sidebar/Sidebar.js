import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";

import { useDataLayerValue } from "./../../../DataLayer";

//material UI
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicianIcon from "@material-ui/icons/LibraryMusic";

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <div className="sidebar">
      I AM SIDEBAR
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spotify__logo"
      />
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicianIcon} title="Your Library" />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => {
        <SidebarOption title={playlist.name} />;
      })}
      <SidebarOption title="Rock" />
      <SidebarOption title="Classic" />
      <SidebarOption title="POP" />
      <SidebarOption title="Podcasts" />
    </div>
  );
}
export default Sidebar;
