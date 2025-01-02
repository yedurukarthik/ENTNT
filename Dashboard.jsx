import React, { useState } from 'react';
import useCompanyStore from '../store/companyStore';
import useCommunicationStore from '../store/communicationStore';
import CompanyRow from '../components/dashboard/CompanyRow';
import CommunicationModal from '../components/CommunicationModal';
import Notifications from '../components/Notifications';

export default function Dashboard() {
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [showCommunicationModal, setShowCommunicationModal] = useState(false);
  const { companies } = useCompanyStore();
  const { communications } = useCommunicationStore();

  const toggleCompanySelection = (companyId) => {
    setSelectedCompanies(prev =>
      prev.includes(companyId)
        ? prev.filter(id => id !== companyId)
        : [...prev, companyId]
    );
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <Notifications />
          <button
            onClick={() => setShowCommunicationModal(true)}
            disabled={selectedCompanies.length === 0}
            className="btn-primary disabled:opacity-50"
          >
            Log Communication
          </button>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Company
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Five Communications
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Next Communication
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {companies.map((company) => (
              <CompanyRow
                key={company.id}
                company={company}
                communications={communications}
                selected={selectedCompanies.includes(company.id)}
                onSelect={() => toggleCompanySelection(company.id)}
              />
            ))}
          </tbody>
        </table>
      </div>

      {showCommunicationModal && (
        <CommunicationModal
          isOpen={showCommunicationModal}
          onClose={() => {
            setShowCommunicationModal(false);
            setSelectedCompanies([]);
          }}
          companyIds={selectedCompanies}
        />
      )}
    </div>
  );
}