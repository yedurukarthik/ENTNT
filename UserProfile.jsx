import React, { useState } from 'react';

export default function UserProfile() {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Communication Manager',
    timezone: 'UTC-5',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle profile update
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          value={profile.name}
          onChange={(e) => setProfile({ ...profile, name: e.target.value })}
          className="input-field mt-1"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          value={profile.email}
          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          className="input-field mt-1"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Role</label>
        <input
          type="text"
          value={profile.role}
          onChange={(e) => setProfile({ ...profile, role: e.target.value })}
          className="input-field mt-1"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Timezone</label>
        <select
          value={profile.timezone}
          onChange={(e) => setProfile({ ...profile, timezone: e.target.value })}
          className="input-field mt-1"
        >
          <option value="UTC-5">Eastern Time (UTC-5)</option>
          <option value="UTC-8">Pacific Time (UTC-8)</option>
          <option value="UTC+0">UTC</option>
          <option value="UTC+5:30">India (UTC+5:30)</option>
        </select>
      </div>

      <button type="submit" className="btn-primary">
        Save Changes
      </button>
    </form>
  );
}