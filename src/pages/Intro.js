import React from "react";
import Main from "../components/Main";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <Main>
      <h1 style={{ textAlign: "center" }}>Intro</h1>
      <button>
        <Link to="/home">내용보기</Link>
      </button>
    </Main>
  );
};

export default Intro;
