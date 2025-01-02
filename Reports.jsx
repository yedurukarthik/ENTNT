import React from 'react';
import useCommunicationStore from '../store/communicationStore';
import useCompanyStore from '../store/companyStore';
import PieChart from '../components/charts/PieChart';
import LineChart from '../components/charts/LineChart';
import HistogramChart from '../components/charts/HistogramChart';
import { format } from 'date-fns';

export default function Reports() {
  const { communications } = useCommunicationStore();
  const { companies } = useCompanyStore();

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Reports & Analytics</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Communication Methods Distribution</h2>
          <PieChart communications={communications} />
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Communication Trends</h2>
          <LineChart communications={communications} />
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Communications by Company</h2>
          <HistogramChart communications={communications} companies={companies} />
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity Log</h2>
          <div className="space-y-4 max-h-[400px] overflow-y-auto">
            {communications
              .sort((a, b) => new Date(b.date) - new Date(a.date))
              .slice(0, 10)
              .map((comm) => {
                const company = companies.find(c => c.id === comm.companyId);
                return (
                  <div key={comm.id} className="border-l-4 border-blue-500 pl-4 py-2">
                    <div className="text-sm font-medium">{company?.name}</div>
                    <div className="text-xs text-gray-600">{comm.method}</div>
                    <div className="text-xs text-gray-500">
                      {format(new Date(comm.date), 'MMMM d, yyyy')}
                    </div>
                    {comm.notes && (
                      <div className="text-sm text-gray-600 mt-1">{comm.notes}</div>
                    )}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}