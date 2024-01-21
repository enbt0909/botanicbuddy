import React, { useState } from 'react';
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Calendar() {
  const [date, setDate] = useState(new Date());

  const onChange = date => {
    setDate(date);
  };

  return (
    <div className="calendar">
      <ReactCalendar
        onChange={onChange}
        value={date}
      />
    </div>
  );
}

export default Calendar;