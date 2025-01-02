import React, { useState } from 'react';
import { format, addMonths, subMonths, startOfWeek, endOfWeek } from 'date-fns';
import { ChevronLeftIcon, ChevronRightIcon, PlusIcon } from '@heroicons/react/24/outline';
import useCompanyStore from '../store/companyStore';
import useCommunicationStore from '../store/communicationStore';
import CalendarGrid from '../components/calendar/CalendarGrid';
import CommunicationModal from '../components/CommunicationModal';
import CalendarLegend from '../components/calendar/CalendarLegend';
import CalendarSidebar from '../components/calendar/CalendarSidebar';

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showCommunicationModal, setShowCommunicationModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const { companies } = useCompanyStore();
  const { communications } = useCommunicationStore();

  const events = communications.map(comm => ({
    ...comm,
    company: companies.find(c => c.id === comm.companyId),
  }));

  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setShowCommunicationModal(true);
  };

  const weekStart = startOfWeek(currentDate);
  const weekEnd = endOfWeek(currentDate);
  const upcomingEvents = events.filter(
    event => new Date(event.date) >= weekStart && new Date(event.date) <= weekEnd
  );

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Communication Calendar</h1>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setShowCommunicationModal(true)}
            className="btn-primary flex items-center space-x-2"
          >
            <PlusIcon className="h-5 w-5" />
            <span>Add Communication</span>
          </button>
          <div className="flex items-center space-x-2">
            <button
              onClick={prevMonth}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </button>
            <span className="text-lg font-medium min-w-[150px] text-center">
              {format(currentDate, 'MMMM yyyy')}
            </span>
            <button
              onClick={nextMonth}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-6">
        <div className="flex-1">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="grid grid-cols-7 gap-1 mb-2">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div key={day} className="text-center font-medium text-gray-500">
                  {day}
                </div>
              ))}
            </div>
            <CalendarGrid 
              currentDate={currentDate} 
              events={events} 
              onDateSelect={handleDateSelect}
            />
            <CalendarLegend />
          </div>
        </div>
        
        <CalendarSidebar 
          currentDate={currentDate}
          upcomingEvents={upcomingEvents}
        />
      </div>

      {showCommunicationModal && (
        <CommunicationModal
          isOpen={showCommunicationModal}
          onClose={() => {
            setShowCommunicationModal(false);
            setSelectedDate(null);
          }}
          initialDate={selectedDate}
        />
      )}
    </div>
  );
}