import React from "react";
import "./Footer.css";

import PlayCircleOutlineOutlinedIcon from "@material-ui/icons/PlayCircleOutlineOutlined";
import SkipPreviousIcon from "@material-ui/icons/SkipNext";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";

function Footer(props) {
  return (
    <div className="footer">
      <div className="footer__left">
        <img className="footer_albumLogo" src="" alt="..." />
        <div className="footer__songInfo">
          <h4>No songs are playing</h4>
          <p>...</p>
        </div>
      </div>

      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer_icon" />
        <PlayCircleOutlineOutlinedIcon
          fontSize="large"
          className="footer__icon"
        />
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__green" />

        <p></p>
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
export default Footer;
