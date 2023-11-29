import React from "react";
import { BotBar } from "../styles/footerstyles";

const Footer = () => {
  return (
    <BotBar>
      <button>
        <img src="images/bt_dot.svg" />
      </button>
      <h2>footer</h2>
      <button className="btplus">
        <img src="images/bt_plus.svg" />
      </button>
    </BotBar>
  );
};

export default Footer;
