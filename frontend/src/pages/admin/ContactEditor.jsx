import React, { useState, useEffect } from 'react';
import axiosClient from '../../lib/axios';
import { Save } from 'lucide-react';

const ContactEditor = () => {
    const [officeInfo, setOfficeInfo] = useState({
        address: '',
        email: '',
        mobile: '',
        landline: ''
    });
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
                try {
                    const parsed = JSON.parse(info.content);
                    setOfficeInfo(parsed);
                } catch (e) {
                    // Fallback for legacy text content, try to map it or just reset
                    console.warn('Could not parse office info JSON, resetting fields');
                    setOfficeInfo({ address: info.content, email: '', mobile: '', landline: '' });
                }
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
                content: JSON.stringify(officeInfo)
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
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Office Address</label>
                        <textarea
                            className="w-full h-24 p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            value={officeInfo.address || ''}
                            onChange={(e) => setOfficeInfo({ ...officeInfo, address: e.target.value })}
                            placeholder="Lot 3739 National Highway..."
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input
                            type="email"
                            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            value={officeInfo.email || ''}
                            onChange={(e) => setOfficeInfo({ ...officeInfo, email: e.target.value })}
                            placeholder="cliberduche.corp@yahoo.com"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                            <input
                                type="text"
                                className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                value={officeInfo.mobile || ''}
                                onChange={(e) => setOfficeInfo({ ...officeInfo, mobile: e.target.value })}
                                placeholder="0917 123 4567"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Landline (Optional)</label>
                            <input
                                type="text"
                                className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                value={officeInfo.landline || ''}
                                onChange={(e) => setOfficeInfo({ ...officeInfo, landline: e.target.value })}
                                placeholder="(049) 123 4567"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactEditor;
