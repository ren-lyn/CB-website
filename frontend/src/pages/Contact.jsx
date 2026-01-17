import React, { useState, useEffect } from 'react';
import api from '../lib/axios';

export const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState('');
    const [officeInfo, setOfficeInfo] = useState('');

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const response = await api.get('/api/page-contents?page=contact');
                const data = response.data;
                const info = data.find(item => item.section_name === 'office_info');
                if (info) {
                    setOfficeInfo(info.content);
                }
            } catch (error) {
                console.error('Error fetching content:', error);
            }
        };
        fetchContent();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        try {
            await api.post('/inquiries', formData);
            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <div className="font-sans pt-20">
            <div className="bg-company-blue py-16 text-center text-white">
                <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
                <p className="text-blue-100">Get in touch for quotations and inquiries.</p>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-12">

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                        <h2 className="text-2xl font-bold mb-6 text-gray-800">Send us a Message</h2>
                        {status === 'success' && (
                            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                                Message sent successfully! We will get back to you soon.
                            </div>
                        )}
                        {status === 'error' && (
                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                                Something went wrong. Please try again.
                            </div>
                        )}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea
                                    required
                                    rows="4"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full bg-company-blue hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-colors shadow-md disabled:opacity-50"
                            >
                                {status === 'sending' ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <div className="bg-gray-50 p-8 rounded-xl h-full">
                            <h2 className="text-2xl font-bold mb-8 text-gray-800">Office Information</h2>
                            <div className="whitespace-pre-wrap text-gray-700">
                                {officeInfo ? (
                                    officeInfo.split('\n').map((line, index) => {
                                        const parts = line.split(':');
                                        if (parts.length > 1) {
                                            return (
                                                <div key={index} className="mb-2">
                                                    <strong>{parts[0]}:</strong>{parts.slice(1).join(':')}
                                                </div>
                                            );
                                        }
                                        return <div key={index} className="mb-2">{line}</div>;
                                    })
                                ) : "Loading office info..."}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
