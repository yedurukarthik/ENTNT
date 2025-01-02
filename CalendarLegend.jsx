import React from 'react';

export default function CalendarLegend() {
  const legendItems = [
    { color: 'bg-blue-100', label: 'Past Communication' },
    { color: 'bg-green-100', label: 'Upcoming Communication' },
    { color: 'bg-yellow-100', label: 'Due Today' },
    { color: 'bg-red-100', label: 'Overdue' },
  ];

  return (
    <div className="mt-4 flex items-center justify-end space-x-4">
      {legendItems.map(({ color, label }) => (
        <div key={label} className="flex items-center space-x-2">
          <div className={`w-4 h-4 rounded ${color}`} />
          <span className="text-sm text-gray-600">{label}</span>
        </div>
      ))}
    </div>
  );
}