import React from "react";
import Body from "./Body/Body";
import "./Player.css";
import Sidebar from "./Sidebar/Sidebar";
import Footer from "./Footer/Footer";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body spotify={spotify} />
      </div>

      <Footer />
    </div>
  );
}

export default Player;
