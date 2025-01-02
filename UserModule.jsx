import React, { useState } from 'react';
import UserProfile from '../components/user/UserProfile';
import UserPreferences from '../components/user/UserPreferences';
import UserNotifications from '../components/user/UserNotifications';

export default function UserModule() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">User Settings</h1>
      
      <div className="bg-white rounded-lg shadow">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex">
            {['profile', 'preferences', 'notifications'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`${
                  activeTab === tab
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm capitalize`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'profile' && <UserProfile />}
          {activeTab === 'preferences' && <UserPreferences />}
          {activeTab === 'notifications' && <UserNotifications />}
        </div>
      </div>
    </div>
  );
}