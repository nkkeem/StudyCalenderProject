import {useEffect, useState} from "react";
import moment from "moment";
import "../components/calendar.css";
import Calendar from "react-calendar";
import axios from "axios";

const onClickDay = (clicked) => {
    let day = moment(clicked).format("YYYY-MM-DD");

        const fetchData = async () => {
            try {
                const response = await axios({
                    method: 'get',
                    url: `/getToDo/${day}`,
                    baseURL: 'http://localhost:8090/api/ex',
                    timeout: 2000,
                });
                document.write(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
}

const onClickYear = (clicked) => {
    console.log(clicked);
    debugger;
}

function CalendarPage(props) {
    const [value, onChange] = useState(new Date());

    return (
        <div className="App">
            <Calendar
                const locale = "en"
                value={value}
                onChange={onChange}
                onClickDay={onClickDay}
                onClickYear={onClickYear}
                formatDay={(locale, date) => moment(date).format("DD")}
            >
            </Calendar>
        </div>
    );
}

export default CalendarPage;