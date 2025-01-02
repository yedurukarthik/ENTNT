import { create } from 'zustand'
import { sampleCompanies } from '../utils/sampleData'

const useCompanyStore = create((set) => ({
  companies: sampleCompanies,
  addCompany: (company) => 
    set((state) => ({ 
      companies: [...state.companies, company] 
    })),
  updateCompany: (id, updatedCompany) =>
    set((state) => ({
      companies: state.companies.map((company) =>
        company.id === id ? { ...company, ...updatedCompany } : company
      ),
    })),
  deleteCompany: (id) =>
    set((state) => ({
      companies: state.companies.filter((company) => company.id !== id),
    })),
}))

export default useCompanyStore