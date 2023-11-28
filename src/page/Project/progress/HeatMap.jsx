// src/UserActivityHeatmap.js
import React from 'react';
import { eachDayOfInterval, format, startOfMonth, endOfMonth, startOfWeek, endOfWeek } from 'date-fns';
import './HeatMap.css';

const UserActivityHeatmap = ({ signUpDate, visitedDates }) => {
    const currentYear = new Date().getFullYear();
  
    // Generate an array of all days in the year
    const allDaysOfYear = eachDayOfInterval({
      start: new Date(currentYear, 0, 1),
      end: new Date(currentYear, 11, 31),
    });
  
    // Group days by month
    const daysByMonth = allDaysOfYear.reduce((acc, day) => {
      const month = format(day, 'MMMM');
      acc[month] = acc[month] || [];
      acc[month].push(day);
      return acc;
    }, {});
  
    return (
      <div className="user-activity-container">
        <div className="user-activity-heatmap">
          {Object.entries(daysByMonth).map(([month, days]) => (
            <div key={month} className="month">
              <h2>{month}</h2>
              <div className="week-container">
                {days.map((day) => (
                  <div
                    key={format(day, 'yyyyMMdd')}
                    className={`day ${visitedDates.includes(format(day, 'yyyyMMdd')) ? 'visited' : ''}`}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default UserActivityHeatmap;