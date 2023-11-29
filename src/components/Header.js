import React from "react";
import { TopBar } from "../styles/headerstyles";

const Header = () => {
  return (
    <TopBar>
      <button>
        <img src="images/bt_list.svg" />
      </button>
      <h2>header</h2>
      <button>
        <img src="images/bt_login.svg" />
      </button>
    </TopBar>
  );
};

export default Header;
