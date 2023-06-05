import React, { useEffect, useRef, useState } from 'react';
import Header from './pages/Header';
import Main from './pages/Main';
import CalendarPage from './pages/calendar/CalendarPage';
import Signup from './pages/user/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './pages/error/NotFound';
import Footer from './pages/Footer';
import Todo from './pages/todo/toDo';
import toDoInsert from "./pages/todo/toDoInsert";
import toDoTemplate from "./pages/todo/toDoTemplate";

function App() {
  const ref = useRef(null);

  return (
    <BrowserRouter ref={ref}>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/calendar" element={<CalendarPage />}></Route>
        <Route path="/user/signup" element={<Signup />}></Route>
        <Route path="/board" element={<Todo />}></Route>
        {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
