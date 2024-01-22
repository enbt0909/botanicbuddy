import React, { useState, useEffect } from 'react';
import ReactCalendar from 'react-calendar';
import { toast, ToastContainer } from 'react-toastify';

function Calendar() {
  const [date, setDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const savedAppointments = localStorage.getItem('appointments');
    if (savedAppointments) {
      setAppointments(JSON.parse(savedAppointments).map(appointment => new Date(appointment)));
    }
  }, []);

  const addAppointment = date => {
    const newAppointments = [...appointments, date];
    setAppointments(newAppointments);
    localStorage.setItem('appointments', JSON.stringify(newAppointments));
    toast.success('hinzugefügt', { autoClose: 1000 });
  };

  const deleteAppointment = index => {
    const newAppointments = [...appointments];
    newAppointments.splice(index, 1);
    setAppointments(newAppointments);
    localStorage.setItem('appointments', JSON.stringify(newAppointments));
    toast.info('gelöscht', { autoClose: 1000 });
  };

  const onChange = date => {
    setDate(date);
    addAppointment(date);
  };

  return (
    <div className="calendar">
      <ReactCalendar
        onChange={onChange}
        value={date}
      />
      <ToastContainer />
      <div className="appointments">
        {appointments.map((appointment, index) => {
          const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
          const formattedDate = appointment.toLocaleDateString('de-DE', options);
          return (
            <div key={index} data-appointment={appointment.toString()}>
              <p>Errinerung: {formattedDate}</p>
              <button onClick={() => deleteAppointment(index)}>Löschen</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Calendar;