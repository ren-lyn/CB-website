import React from 'react';

const Organization = () => {
    return (
        <div className="font-sans pt-20">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Organizational Structure</h1>
                    <p className="text-xl text-gray-600">The team behind Cliberduche Corporation's success.</p>
                </div>

                {/* Simple Tree Visualization */}
                <div className="max-w-4xl mx-auto">
                    {/* Level 1 */}
                    <div className="flex justify-center mb-12">
                        <div className="bg-company-blue text-white p-6 rounded-lg shadow-lg text-center w-72 transform hover:scale-105 transition-transform">
                            <h3 className="font-bold text-xl">President & General Manager</h3>
                            <p className="text-blue-100 text-sm mt-1">Leadership</p>
                        </div>
                    </div>

                    {/* Connector Line */}
                    <div className="w-1 h-8 bg-gray-300 mx-auto -mt-12 mb-12"></div>
                    <div className="w-full h-1 bg-gray-300 mb-8 max-w-3xl mx-auto"></div>

                    {/* Level 2 Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {/* Role */}
                        <div className="flex flex-col items-center">
                            <div className="w-1 h-8 bg-gray-300 mb-0"></div>
                            <div className="bg-white border-2 border-gray-100 p-4 rounded-lg shadow-sm w-full">
                                <h4 className="font-bold text-gray-800">Marketing Manager</h4>
                            </div>
                        </div>
                        {/* Role */}
                        <div className="flex flex-col items-center">
                            <div className="w-1 h-8 bg-gray-300 mb-0"></div>
                            <div className="bg-white border-2 border-gray-100 p-4 rounded-lg shadow-sm w-full">
                                <h4 className="font-bold text-gray-800">Finance & Procurement</h4>
                            </div>
                        </div>
                        {/* Role */}
                        <div className="flex flex-col items-center">
                            <div className="w-1 h-8 bg-gray-300 mb-0"></div>
                            <div className="bg-white border-2 border-gray-100 p-4 rounded-lg shadow-sm w-full">
                                <h4 className="font-bold text-gray-800">Chief of Site Operations</h4>
                            </div>
                        </div>
                    </div>

                    {/* Level 3 Grid (More roles) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center mt-8 max-w-2xl mx-auto">
                        <div className="flex flex-col items-center">
                            <div className="bg-white border-2 border-gray-100 p-4 rounded-lg shadow-sm w-full">
                                <h4 className="font-bold text-gray-800">Safety Officer</h4>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-white border-2 border-gray-100 p-4 rounded-lg shadow-sm w-full">
                                <h4 className="font-bold text-gray-800">Legal Team</h4>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Manpower */}
                <div className="mt-20 bg-gray-50 rounded-xl p-8 text-center">
                    <h2 className="text-2xl font-bold mb-4">Our Manpower</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We employ a dedicated team of skilled professionals, engineers, equipment operators, and site workers to ensure every project is executed with precision and efficiency.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Organization;
