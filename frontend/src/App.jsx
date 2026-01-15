import React, { StrictMode } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import AdminLayout from './layouts/AdminLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import { About, Services, Projects, Contact, Organization, Resources } from './pages/Pages';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

import AdminServices from './pages/admin/AdminServices';
import AdminProjects from './pages/admin/AdminProjects';
import AdminInquiries from './pages/admin/AdminInquiries';
const Dashboard = () => <h1 className="text-2xl">Welcome to the Admin Dashboard</h1>;


function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="projects" element={<Projects />} />
          <Route path="resources" element={<Resources />} />
          <Route path="organization" element={<Organization />} />
          <Route path="contact-us" element={<Contact />} />
        </Route>

        <Route path="/login" element={<Login />} />

        <Route path="/admin" element={<ProtectedRoute />}>
          <Route element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="services" element={<AdminServices />} />
            <Route path="projects" element={<AdminProjects />} />
            <Route path="inquiries" element={<AdminInquiries />} />
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
