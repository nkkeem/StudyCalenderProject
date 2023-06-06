import {useEffect, useState} from "react";
import moment from "moment";
import "./components/calendar.css";
import Calendar from "react-calendar";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function CalendarPage(props) {
    const [value, onChange] = useState(new Date());
    const navigate = useNavigate();

    // 날짜 누르면 해당 날짜 게시판으로 이동
    const onClickDay = (date) => {
        date = moment(date).format("YYYYMMDD");

        // 데이터를 가져와서 board 페이지를 띄워야 됨.
        navigate(`/board`);

    }

    return (
        <div className="App">
            <Calendar
                const locale = "en"
                value={value}
                onChange={onChange}
                onClickDay={onClickDay}
                formatDay={(locale, date) => moment(date).format("DD")}
            >
            </Calendar>
        </div>
    );
}

export default CalendarPage;