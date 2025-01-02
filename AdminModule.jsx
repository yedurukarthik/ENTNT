import React, { useState } from 'react'
import useCompanyStore from '../store/companyStore'
import { COMMUNICATION_METHODS } from '../utils/constants'

export default function AdminModule() {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    linkedinProfile: '',
    emails: '',
    phoneNumbers: '',
    comments: '',
    communicationPeriodicity: 14, // Default 2 weeks
  })

  const { addCompany } = useCompanyStore()

  const handleSubmit = (e) => {
    e.preventDefault()
    addCompany({
      id: Date.now(),
      ...formData,
      emails: formData.emails.split(',').map(email => email.trim()),
      phoneNumbers: formData.phoneNumbers.split(',').map(phone => phone.trim()),
    })
    setFormData({
      name: '',
      location: '',
      linkedinProfile: '',
      emails: '',
      phoneNumbers: '',
      comments: '',
      communicationPeriodicity: 14,
    })
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Admin Module</h1>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Add New Company</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Company Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="input-field"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Location</label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="input-field"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">LinkedIn Profile</label>
            <input
              type="url"
              value={formData.linkedinProfile}
              onChange={(e) => setFormData({ ...formData, linkedinProfile: e.target.value })}
              className="input-field"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Emails (comma-separated)</label>
            <input
              type="text"
              value={formData.emails}
              onChange={(e) => setFormData({ ...formData, emails: e.target.value })}
              className="input-field"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Numbers (comma-separated)</label>
            <input
              type="text"
              value={formData.phoneNumbers}
              onChange={(e) => setFormData({ ...formData, phoneNumbers: e.target.value })}
              className="input-field"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Communication Periodicity (days)</label>
            <input
              type="number"
              value={formData.communicationPeriodicity}
              onChange={(e) => setFormData({ ...formData, communicationPeriodicity: parseInt(e.target.value) })}
              className="input-field"
              min="1"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Comments</label>
            <textarea
              value={formData.comments}
              onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
              className="input-field"
              rows="3"
            />
          </div>
          
          <button type="submit" className="btn-primary">
            Add Company
          </button>
        </form>
      </div>

      <div className="mt-8 bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Communication Methods</h2>
        <div className="space-y-2">
          {COMMUNICATION_METHODS.map((method) => (
            <div key={method.id} className="flex items-center justify-between p-3 bg-gray-50 rounded">
              <div>
                <span className="font-medium">{method.name}</span>
                <span className="ml-2 text-sm text-gray-500">Sequence: {method.sequence}</span>
              </div>
              <span className={`px-2 py-1 text-xs rounded ${method.mandatory ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>
                {method.mandatory ? 'Mandatory' : 'Optional'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}