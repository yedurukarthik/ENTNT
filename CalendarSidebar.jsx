import React from 'react';
import { format } from 'date-fns';

export default function CalendarSidebar({ currentDate, upcomingEvents }) {
  return (
    <div className="w-80">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Upcoming Communications</h2>
        <div className="space-y-4">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="border-l-4 border-blue-500 pl-4 py-2"
            >
              <div className="text-sm font-medium">{event.company.name}</div>
              <div className="text-xs text-gray-600">{event.method}</div>
              <div className="text-xs text-gray-500">
                {format(new Date(event.date), 'MMM d, yyyy')}
              </div>
              {event.notes && (
                <div className="text-xs text-gray-600 mt-1 line-clamp-2">
                  {event.notes}
                </div>
              )}
            </div>
          ))}
          {upcomingEvents.length === 0 && (
            <p className="text-sm text-gray-500">No upcoming communications this week</p>
          )}
        </div>
      </div>
    </div>
  );
}