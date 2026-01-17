import React, { useState, useEffect } from 'react';
import axiosClient from '../../lib/axios';
import { Save } from 'lucide-react';

const ContactEditor = () => {
    const [officeInfo, setOfficeInfo] = useState('');
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchContent();
    }, []);

    const fetchContent = async () => {
        try {
            const response = await axiosClient.get('/api/page-contents?page=contact');
            const data = response.data;
            const info = data.find(item => item.section_name === 'office_info');
            if (info) {
                setOfficeInfo(info.content);
            }
        } catch (error) {
            console.error('Error fetching content:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSave = async () => {
        setSaving(true);
        setMessage('');
        try {
            await axiosClient.post('/api/page-contents', {
                page_name: 'contact',
                section_name: 'office_info',
                content: officeInfo
            });
            setMessage('Office Information saved successfully!');
            setTimeout(() => setMessage(''), 3000);
        } catch (error) {
            console.error('Error saving content:', error);
            setMessage('Error saving content');
        } finally {
            setSaving(false);
        }
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Edit Contact Page</h2>
            
            {message && (
                <div className="bg-green-100 text-green-700 p-3 rounded mb-4 fixed top-4 right-4 shadow-lg z-50">
                    {message}
                </div>
            )}

            <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold">Office Information</h3>
                    <button 
                        onClick={handleSave}
                        disabled={saving}
                        className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
                    >
                        <Save size={18} /> Save
                    </button>
                </div>
                <p className="text-sm text-gray-500 mb-2">
                    Enter address, phone, email, etc. You can use HTML tags for formatting if needed.
                </p>
                <textarea
                    className="w-full h-64 p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
                    value={officeInfo}
                    onChange={(e) => setOfficeInfo(e.target.value)}
                    placeholder="Enter office information..."
                />
            </div>
        </div>
    );
};

export default ContactEditor;
