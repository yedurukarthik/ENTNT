import React, { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { COMMUNICATION_METHODS } from '../utils/constants'
import useCommunicationStore from '../store/communicationStore'

export default function CommunicationModal({ isOpen, onClose, companyId }) {
  const [formData, setFormData] = useState({
    method: COMMUNICATION_METHODS[0].name,
    date: new Date().toISOString().split('T')[0],
    notes: '',
  })

  const { addCommunication } = useCommunicationStore()

  const handleSubmit = (e) => {
    e.preventDefault()
    addCommunication({
      id: Date.now(),
      companyId,
      ...formData,
    })
    onClose()
  }

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-sm rounded bg-white p-6">
          <Dialog.Title className="text-lg font-medium mb-4">Log Communication</Dialog.Title>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Method</label>
              <select
                value={formData.method}
                onChange={(e) => setFormData({ ...formData, method: e.target.value })}
                className="input-field"
              >
                {COMMUNICATION_METHODS.map((method) => (
                  <option key={method.id} value={method.name}>
                    {method.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Date</label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="input-field"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Notes</label>
              <textarea
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="input-field"
                rows="3"
              />
            </div>
            
            <div className="flex justify-end space-x-4">
              <button type="button" onClick={onClose} className="btn-secondary">
                Cancel
              </button>
              <button type="submit" className="btn-primary">
                Save
              </button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}