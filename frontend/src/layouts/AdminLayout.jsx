import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AdminLayout = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate('/login');
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-company-dark text-white">
                <div className="p-6">
                    <h2 className="text-2xl font-bold">Admin Panel</h2>
                </div>
                <nav className="mt-6">
                    <Link to="/admin" className="block py-2.5 px-4 hover:bg-gray-700">Dashboard</Link>
                    <Link to="/admin/services" className="block py-2.5 px-4 hover:bg-gray-700">Services</Link>
                    <Link to="/admin/projects" className="block py-2.5 px-4 hover:bg-gray-700">Projects</Link>
                    <Link to="/admin/inquiries" className="block py-2.5 px-4 hover:bg-gray-700">Inquiries</Link>
                </nav>
                <div className="absolute bottom-0 w-64 p-4">
                    <button onClick={handleLogout} className="w-full bg-red-600 py-2 rounded">Logout</button>
                </div>
            </aside>
            {/* Main Content */}
            <main className="flex-1 p-8 overflow-y-auto">
                <Outlet />
            </main>
        </div>
    );
};

export default AdminLayout;
