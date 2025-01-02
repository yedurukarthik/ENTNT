import React from 'react';
import { format } from 'date-fns';
import { getCommunicationStatus } from '../../utils/dateUtils';
import { COMMUNICATION_STATUS_COLORS } from '../../utils/constants';
import CommunicationBadge from '../shared/CommunicationBadge';

export default function CompanyRow({ company, communications, selected, onSelect }) {
  const lastFiveCommunications = communications
    .filter(comm => comm.companyId === company.id)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  const getNextCommunication = () => {
    const lastComm = lastFiveCommunications[0];
    if (!lastComm) return null;

    const nextDate = new Date(lastComm.date);
    nextDate.setDate(nextDate.getDate() + company.communicationPeriodicity);
    
    return {
      date: nextDate,
      status: getCommunicationStatus(nextDate)
    };
  };

  const nextComm = getNextCommunication();
  const statusColor = nextComm ? COMMUNICATION_STATUS_COLORS[nextComm.status] : '';

  return (
    <tr className={statusColor}>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={selected}
            onChange={onSelect}
            className="h-4 w-4 text-primary-600 rounded border-gray-300"
          />
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{company.name}</div>
            <div className="text-sm text-gray-500">{company.location}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="flex flex-wrap gap-2">
          {lastFiveCommunications.map((comm, index) => (
            <CommunicationBadge key={index} communication={comm} />
          ))}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        {nextComm && (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            {format(nextComm.date, 'MMM d, yyyy')}
          </span>
        )}
      </td>
    </tr>
  );
}