import React, {useEffect, useRef, useState} from 'react';
import Header from "./Sample/Header";
import Main from "./Sample/Main";
import CalendarPage from "./Sample/CalendarPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NotFound from "./Sample/error/NotFound";

function App() {
  const ref = useRef(null);

  return (
    <BrowserRouter ref={ref}>
            <Header />
            <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/calendar" element={<CalendarPage />}></Route>
                {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
    </BrowserRouter>
  );
}

export default App;
