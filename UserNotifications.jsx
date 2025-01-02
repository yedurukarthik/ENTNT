import React from 'react';
import { format } from 'date-fns';
import useCompanyStore from '../../store/companyStore';
import useCommunicationStore from '../../store/communicationStore';
import { getCommunicationStatus } from '../../utils/dateUtils';

export default function UserNotifications() {
  const { companies } = useCompanyStore();
  const { communications } = useCommunicationStore();

  const getNotifications = () => {
    const notifications = [];
    companies.forEach(company => {
      const lastComm = communications
        .filter(c => c.companyId === company.id)
        .sort((a, b) => new Date(b.date) - new Date(a.date))[0];

      if (lastComm) {
        const nextDate = new Date(lastComm.date);
        nextDate.setDate(nextDate.getDate() + company.communicationPeriodicity);
        const status = getCommunicationStatus(nextDate);

        if (status === 'overdue' || status === 'due') {
          notifications.push({
            company,
            dueDate: nextDate,
            status,
          });
        }
      }
    });

    return notifications.sort((a, b) => a.dueDate - b.dueDate);
  };

  const notifications = getNotifications();

  return (
    <div className="space-y-6">
      <div className="flow-root">
        <ul className="-mb-8">
          {notifications.map((notification, idx) => (
            <li key={notification.company.id}>
              <div className="relative pb-8">
                {idx !== notifications.length - 1 && (
                  <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                )}
                <div className="relative flex space-x-3">
                  <div>
                    <span className={`h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white ${
                      notification.status === 'overdue' ? 'bg-red-500' : 'bg-yellow-500'
                    }`}>
                      <span className="text-white text-sm font-medium">{notification.company.name[0]}</span>
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                    <div>
                      <p className="text-sm text-gray-500">
                        Communication due for <span className="font-medium text-gray-900">{notification.company.name}</span>
                      </p>
                    </div>
                    <div className="whitespace-nowrap text-right text-sm text-gray-500">
                      <time dateTime={notification.dueDate.toISOString()}>
                        {format(notification.dueDate, 'MMM d, yyyy')}
                      </time>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}