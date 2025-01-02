import React from 'react';
import { BellIcon } from '@heroicons/react/24/outline';
import useCompanyStore from '../store/companyStore';
import useCommunicationStore from '../store/communicationStore';
import { getCommunicationStatus } from '../utils/dateUtils';

export default function Notifications() {
  const { companies } = useCompanyStore();
  const { communications } = useCommunicationStore();

  const getOverdueAndDueCommunications = () => {
    const today = new Date();
    let overdue = [];
    let dueToday = [];

    companies.forEach(company => {
      const lastComm = communications
        .filter(c => c.companyId === company.id)
        .sort((a, b) => new Date(b.date) - new Date(a.date))[0];

      if (lastComm) {
        const nextDate = new Date(lastComm.date);
        nextDate.setDate(nextDate.getDate() + company.communicationPeriodicity);
        const status = getCommunicationStatus(nextDate);

        if (status === 'overdue') {
          overdue.push({ company, dueDate: nextDate });
        } else if (status === 'due') {
          dueToday.push({ company, dueDate: nextDate });
        }
      }
    });

    return { overdue, dueToday };
  };

  const { overdue, dueToday } = getOverdueAndDueCommunications();
  const totalNotifications = overdue.length + dueToday.length;

  return (
    <div className="relative">
      <button className="relative p-2 rounded-full hover:bg-gray-100">
        <BellIcon className="h-6 w-6" />
        {totalNotifications > 0 && (
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
            {totalNotifications}
          </span>
        )}
      </button>
    </div>
  );
}