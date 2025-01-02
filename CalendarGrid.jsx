import React from 'react';
import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameDay,
} from 'date-fns';
import CalendarDay from './CalendarDay';

export default function CalendarGrid({ currentDate, events }) {
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const getDayEvents = (date) => {
    return events.filter((event) => isSameDay(new Date(event.date), date));
  };

  return (
    <div className="grid grid-cols-7 gap-1">
      {days.map((day) => (
        <CalendarDay
          key={day.toString()}
          day={day}
          currentDate={currentDate}
          events={getDayEvents(day)}
        />
      ))}
    </div>
  );
}