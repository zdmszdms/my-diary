import React from "react";
import { BotBar } from "../styles/footerstyles";
import { Link } from "react-router-dom";

const Footer = props => {
  return (
    <BotBar>
      <button>
        <Link to="/images/bt_dot.svg" />
      </button>
      <h2>{props.children}</h2>
      <button className="btplus">
        <Link to="/images/bt_plus.svg" />
      </button>
    </BotBar>
  );
};

export default Footer;
