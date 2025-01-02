import React from 'react';
import { format } from 'date-fns';

export default function CommunicationBadge({ communication }) {
  return (
    <span
      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
      title={communication.notes}
    >
      {communication.method} - {format(new Date(communication.date), 'MMM d')}
    </span>
  );
}