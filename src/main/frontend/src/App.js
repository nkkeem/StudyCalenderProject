import React, { useEffect, useRef, useState } from 'react';
import CalendarPage from './pages/calendar/CalendarPage';
import Signup from './pages/user/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './pages/error/NotFound';
import Todo from './pages/todo/Todo';
import Home from "./pages/Home";
import TodoTemplate from "./pages/todo/TodoTemplate";

function App() {
  const ref = useRef(null);

  return (
    <BrowserRouter ref={ref}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/calendar" element={<CalendarPage />}></Route>
        <Route path="/user/signup" element={<Signup />}></Route>
        <Route path="/board" element={<TodoTemplate />}></Route>
        {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
