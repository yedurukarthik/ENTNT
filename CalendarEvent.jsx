import React from 'react';
import { format } from 'date-fns';

export default function CalendarEvent({ event }) {
  return (
    <div className="p-2 bg-blue-100 rounded-md text-sm">
      <div className="font-medium">{event.company.name}</div>
      <div className="text-xs text-gray-600">{event.method}</div>
      <div className="text-xs text-gray-500">
        {format(new Date(event.date), 'h:mm a')}
      </div>
    </div>
  );
}