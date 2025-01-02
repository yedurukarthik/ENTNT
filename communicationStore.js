import { create } from 'zustand'
import { sampleCommunications } from '../utils/sampleData'

const useCommunicationStore = create((set) => ({
  communications: sampleCommunications,
  addCommunication: (communication) =>
    set((state) => ({
      communications: [...state.communications, communication],
    })),
  updateCommunication: (id, updatedCommunication) =>
    set((state) => ({
      communications: state.communications.map((comm) =>
        comm.id === id ? { ...comm, ...updatedCommunication } : comm
      ),
    })),
  deleteCommunication: (id) =>
    set((state) => ({
      communications: state.communications.filter((comm) => comm.id !== id),
    })),
}))

export default useCommunicationStore