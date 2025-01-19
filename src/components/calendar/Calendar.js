import React, { useEffect, useState } from "react";
import "../calendar/Calendar.css";


export default function Calendar() {
  const date = new Date();
  const monthNum = date.getMonth();
  const yearNum = date.getFullYear();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [currentMonth, setCurrentMonth] = useState(monthNum);
  const [currentYear, setCurrentYear] = useState(yearNum);
  const [calendar, setCalendar] = useState([]);
  const month = monthNames[currentMonth];
  const prevMonth = () => {
    console.log(currentMonth);
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };
  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };
  const generateCalendar = (year, month) => {
    const firstDay = new Date(year, month, 1); // First day of the month
    const lastDate = new Date(year, month + 1, 0).getDate(); // Last date of the month
    const currentDay = firstDay.getDay(); // Day of the week for the 1st day

    let calendar = [];
    let dateCounter = 1;

    // Loop through weeks
    for (let i = 0; i < 6; i++) {
      let week = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < currentDay) {
          week.push(''); // Empty days at the start of the month
        } else if (dateCounter > lastDate) {
          week.push(''); // Empty days at the end of the month
        } else {
          week.push(dateCounter);
          dateCounter++;
        }
      }
      calendar.push(week);
    }
    return calendar;
  };
  useEffect(() => {
    const generatedCalendar = generateCalendar(yearNum, currentMonth);
    setCalendar(generatedCalendar);
  }, [currentMonth, currentYear]);
  return (
    <div className="calendar-wrap">
      <div className="custom-date-picker">
        <input type="text" id="dateInput" placeholder="Select Date" readOnly />
        <div id="calendar" className="calendar-container">
          <div className="calendar-header">
            <button id="prevMonth" className="nav-button" onClick={prevMonth}>
              &#60;
            </button>
            <span id="currentMonth">{month} {currentYear}</span>
            <button id="nextMonth" className="nav-button" onClick={nextMonth}>
              &#62;
            </button>
          </div>
          <div className="calendar-days">
          {calendar && calendar.length > 0 && 
              calendar.map((week, weekIndex) => (
                <div key={weekIndex} className="calendar-week">
                  {week.map((day, dayIndex) => (
                    <div 
                      key={dayIndex} 
                      className={`calendar-day ${day ? '' : 'empty'}`} 
                    >
                      {day || ' '}
                    </div>
                  ))}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
