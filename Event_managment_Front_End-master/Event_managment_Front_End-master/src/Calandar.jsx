import './calander.css';
import React, { useState} from "react";
import './Profile';
import './Calandar';
import './About';
import "react-big-calendar/lib/css/react-big-calendar.css";
import logo from "./LOGO.jpg";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import './Profile'
import { useNavigate } from 'react-router-dom';
import './Budget';
import './Calandar';
import './ClubPage';

const localizer = momentLocalizer(moment);

const Calander = () => {
  const navigate = useNavigate();
  const handleSubmitH = (e) => {
    navigate("/home")
  }
  const handleSubmitR = (e) => {
    navigate("/About")
  }
  const handleSubmitP =(e) =>{
    navigate("/Profile")
  }
  const handleSubmitC =(e) =>{
    navigate("/Calander")
  }
  const handleSubmitB =(e) =>{
    navigate("/Budget")
  }
  const handleSubmitPO =(e) =>{
    navigate('/ClubPage')
  }
  const [clubName, setClubName] = useState("");
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [bookedEvents, setBookedEvents] = useState([]);

  const handleBooking = () => {
    const isBooked = bookedEvents.find(
      (event) =>
        moment(event.eventDate).isSame(eventDate, "day") &&
        event.startTime === startTime
    );
    if (isBooked) {
      alert("This date and time slot are already booked. Please choose another slot.");
      return;
    }

    const newEvent = {
      clubName,
      eventName,
      eventDescription,
      eventDate,
      startTime,
      endTime
    };
    setBookedEvents([...bookedEvents, newEvent]);

    setClubName("");
    setEventName("");
    setEventDescription("");
    setEventDate("");
    setStartTime("");
    setEndTime("");
  };

  const bookedDates = bookedEvents.map((event) => new Date(event.eventDate));

  return (
    <div className="container">
      <div className="NavCalender">
          <div className="NavBar">
          <div className="navLeft"><img src={logo} alt="Logo" className="logo" />MU-EVENTS</div>
          <ul className="navRight">
            <li onClick={handleSubmitH}>Home</li>
            <li onClick={handleSubmitR}>About</li>
            <li onClick={handleSubmitPO}>Posts</li>
            <li onClick={handleSubmitC}>Calender</li>
            <li onClick={handleSubmitB}>Budget</li>
            <li onClick={handleSubmitP}>Profile</li>

          </ul>
      </div>
      </div>

      <div className="bookingForm">
        <h2>EVENT BOOKING</h2>
        <input
          type="text"
          placeholder="Club Name"
          value={clubName}
          onChange={(e) => setClubName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Event Name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
        <textarea
          placeholder="Event Description"
          value={eventDescription}
          onChange={(e) => setEventDescription(e.target.value)}
        ></textarea>
        <input
          type="date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
        />
        <div>
          <label>Start Time:</label>
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </div>
        <div className='Booking'>
          <label>End Time:</label>
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
        </div>
        <button onClick={handleBooking}>Book Event</button>
      </div>

      <div className="bookedEvents">
        <h2>Booked Events</h2>
        {bookedEvents.length === 0 ? (
          <p>No events booked.</p>
        ) : (
          <ul>
            {bookedEvents.map((event, index) => (
              <li key={index}>
                <strong>{event.clubName}</strong> booked{" "}
                <strong>{event.eventName}</strong> on {event.eventDate} from{" "}
                {event.startTime} to {event.endTime}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="calendarContainer">
        <h2>Calendar</h2>
        <Calendar
          localizer={localizer}
          events={bookedDates.map((date) => ({
            start: date,
            end: moment(date).add(1, "day").toDate(),
            title: "Booked",
            allDay: true
          }))}
          startAccessor="start"
          endAccessor="end"
          views={["month"]}
          selectable={false}
          style={{ height: 500 }}
        />
      </div>
    </div>
  );
};

export default Calander;