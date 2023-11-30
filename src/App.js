import "./styles/App.css";
import Intro from "./pages/Intro";
import Index from "./pages/Index";
import DiaryIndex from "./pages/diary/Index";
import DiaryAdd from "./pages/diary/DiaryAdd";
import DiaryEdit from "./pages/diary/DiaryEdit";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="layout">
      <div className="wrap">
        <Routes>
          {/* 경로 작성, path 받을 준비 완료*/}
          <Route path="/" element={<Intro />}></Route>
          <Route path="/home" element={<Index />}></Route>
          <Route path="/diary" element={<DiaryIndex />}></Route>
          <Route path="/diary/add" element={<DiaryAdd />}></Route>
          <Route path="/diary/edit/:pk" element={<DiaryEdit />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
