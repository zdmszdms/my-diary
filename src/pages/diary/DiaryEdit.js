import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import { useNavigate, useParams } from "react-router-dom";

const DiaryEdit = () => {
  const param = useParams();
  const navigate = useNavigate();
  const handleClickMenu = () => {
    navigate("/home");
  };
  return (
    <>
      <Header handleClickMenu={handleClickMenu} icon="bt_back.svg">
        다이어리 수정
      </Header>
      <Main>
        <h2 style={{ textAlign: "center", color: "red" }}>
          다이어리 작성화면 {param.pk} 글 수정
        </h2>
      </Main>
      <Footer></Footer>
    </>
  );
};

export default DiaryEdit;
