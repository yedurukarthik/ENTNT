import { format, isToday, isPast, addDays } from 'date-fns'

export const formatDate = (date) => format(date, 'MMM dd, yyyy')

export const getCommunicationStatus = (dueDate) => {
  if (isPast(dueDate) && !isToday(dueDate)) return 'overdue'
  if (isToday(dueDate)) return 'due'
  return 'upcoming'
}

export const getNextCommunicationDate = (lastDate, periodicity) => {
  return addDays(new Date(lastDate), periodicity)
}