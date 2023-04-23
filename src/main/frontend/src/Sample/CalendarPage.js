import {useState} from "react";
import moment from "moment";
import "../components/calendar.css";
import Calendar from "react-calendar";


function CalendarPage(props) {
    const [value, onChange] = useState(new Date());

    return (
        <div className="App">
            <Calendar
                const locale = "en"
                value={value}
                onChange={onChange}
                formatDay={(locale, date) => moment(date).format("DD")}
            >
            </Calendar>
        </div>
    );
}

export default CalendarPage;