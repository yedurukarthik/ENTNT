import React from 'react';
import { format, isSameMonth, isToday, isPast } from 'date-fns';
import { getCommunicationStatus } from '../../utils/dateUtils';

export default function CalendarDay({ day, currentDate, events, onSelect }) {
  const dayEvents = events.sort((a, b) => new Date(a.date) - new Date(b.date));

  const getEventStyle = (event) => {
    const status = getCommunicationStatus(new Date(event.date));
    switch (status) {
      case 'overdue': return 'bg-red-100 text-red-800';
      case 'due': return 'bg-yellow-100 text-yellow-800';
      case 'upcoming': return 'bg-green-100 text-green-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <div
      onClick={() => onSelect(day)}
      className={`min-h-[120px] p-2 border rounded-md cursor-pointer hover:border-blue-300 ${
        !isSameMonth(day, currentDate)
          ? 'bg-gray-50'
          : isToday(day)
          ? 'bg-blue-50'
          : 'bg-white'
      }`}
    >
      <div className="text-sm font-medium mb-1">
        {format(day, 'd')}
      </div>
      <div className="space-y-1">
        {dayEvents.map((event, index) => (
          <div
            key={index}
            className={`text-xs p-1 rounded truncate ${getEventStyle(event)}`}
            title={`${event.company.name} - ${event.method}\n${event.notes || ''}`}
          >
            {event.company.name}
          </div>
        ))}
      </div>
    </div>
  );
}