import React from "react";
import "./Footer.css";
import { Facebook, Telegram, YouTube } from "@material-ui/icons";

const Footer = () => {
  return (
    <footer className="footer">
      <hr style={{ width: "90%", marginTop: "20px" }} />
      <span className="name">
        Made by {""}
        <a
          href="https://t.me/DanielReactDeveloper"
          target="_blank"
          rel="noreferrer"
        >
          Daniel Adane
        </a>
      </span>
      <div className="socialIcons">
        <a
          href="https://t.me/DanielReactDeveloper/"
          target="_blank"
          rel="noreferrer"
        >
          <Telegram className="icon" />
        </a>
        <a
          href="https://www.facebook.com/danieladane.webdeveloper/"
          target="_blank"
          rel="noreferrer"
        >
          <Facebook className="icon" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCGaT_ifM18F_LxWJA6Z4xSQ/"
          target="_blank"
          rel="noreferrer"
        >
          <YouTube className="icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
