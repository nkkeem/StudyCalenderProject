import React from 'react';
import {Link} from "react-router-dom";

function Main(props) {
    return (
        <>
            <h1>Main</h1>
            <Link to="/calendar">Calendar로 이동!</Link>
            <br/>
            <Link to="/user/signup">회원가입으로 이동!</Link>
        </>
    );
}

export default Main;
