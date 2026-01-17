import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, FileText, Briefcase, FolderKanban, Truck, Phone } from 'lucide-react';

const AdminSidebar = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname.startsWith(path) ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white';
    };

    const navItems = [
        { path: '/admin/about', label: 'About', icon: <FileText size={20} /> },
        { path: '/admin/services', label: 'Services', icon: <Briefcase size={20} /> },
        { path: '/admin/projects', label: 'Projects', icon: <FolderKanban size={20} /> },
        { path: '/admin/resources', label: 'Resources', icon: <Truck size={20} /> },
        { path: '/admin/contact', label: 'Contact', icon: <Phone size={20} /> },
    ];

    return (
        <div className="bg-gray-900 w-64 min-h-screen flex flex-col border-r border-gray-800">
            <div className="p-6 border-b border-gray-800">
                <h1 className="text-xl font-bold text-white flex items-center gap-2">
                    <LayoutDashboard className="text-green-500" />
                    Admin Panel
                </h1>
            </div>
            <nav className="flex-1 p-4 space-y-2">
                {navItems.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive(item.path)}`}
                    >
                        {item.icon}
                        <span className="font-medium">{item.label}</span>
                    </Link>
                ))}
            </nav>
            <div className="p-4 border-t border-gray-800">
                <button className="w-full text-left px-4 py-2 text-red-400 hover:text-red-300 transition-colors text-sm font-medium">
                    Logout
                </button>
            </div>
        </div>
    );
};

export default AdminSidebar;
