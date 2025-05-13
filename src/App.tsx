import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AdminLayout from './layouts/AdminLayout';
import CampaignsPage from './pages/admin/CampaignsPage';
import DashboardPage from './pages/admin/DashboardPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/admin" element={<AdminLayout><DashboardPage /></AdminLayout>} />
        <Route path="/admin/campaigns" element={<AdminLayout><CampaignsPage /></AdminLayout>} />
        <Route path="/admin/adgroups" element={<AdminLayout><div>Ad Groups</div></AdminLayout>} />
        <Route path="/admin/ads" element={<AdminLayout><div>Ads</div></AdminLayout>} />
        <Route path="/admin/settings" element={<AdminLayout><div>Settings</div></AdminLayout>} />
      </Routes>
    </Router>
  );
}

export default App;
