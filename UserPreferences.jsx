import React, { useState } from 'react';

export default function UserPreferences() {
  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    desktopNotifications: true,
    defaultView: 'calendar',
    communicationReminders: true,
    reminderTime: '09:00',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle preferences update
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">Email Notifications</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={preferences.emailNotifications}
              onChange={(e) => setPreferences({ ...preferences, emailNotifications: e.target.checked })}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
          </label>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">Desktop Notifications</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={preferences.desktopNotifications}
              onChange={(e) => setPreferences({ ...preferences, desktopNotifications: e.target.checked })}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Default View</label>
          <select
            value={preferences.defaultView}
            onChange={(e) => setPreferences({ ...preferences, defaultView: e.target.value })}
            className="input-field mt-1"
          >
            <option value="calendar">Calendar</option>
            <option value="dashboard">Dashboard</option>
            <option value="reports">Reports</option>
          </select>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">Communication Reminders</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={preferences.communicationReminders}
              onChange={(e) => setPreferences({ ...preferences, communicationReminders: e.target.checked })}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Reminder Time</label>
          <input
            type="time"
            value={preferences.reminderTime}
            onChange={(e) => setPreferences({ ...preferences, reminderTime: e.target.value })}
            className="input-field mt-1"
          />
        </div>
      </div>

      <button type="submit" className="btn-primary">
        Save Preferences
      </button>
    </form>
  );
}