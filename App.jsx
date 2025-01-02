import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import AdminModule from './pages/AdminModule'
import UserModule from './pages/UserModule'
import Calendar from './pages/Calendar'
import Reports from './pages/Reports'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="admin" element={<AdminModule />} />
        <Route path="user" element={<UserModule />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="reports" element={<Reports />} />
      </Route>
    </Routes>
  )
}