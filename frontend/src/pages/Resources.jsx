import React from 'react';

const Resources = () => {
    return (
        <div className="font-sans pt-20">
            <div className="bg-gray-900 py-16 text-center text-white">
                <h1 className="text-4xl font-bold mb-2">Our Resources</h1>
                <p className="text-gray-400">Backfill Materials & Heavy Equipment Fleet</p>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-16">

                {/* Land Development Sites */}
                <h2 className="text-2xl font-bold text-gray-800 mb-8 border-l-4 border-company-green pl-4">Land Development Sites</h2>
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden group">
                        <div className="h-64 bg-gray-200 relative overflow-hidden">
                            {/* Placeholder generic map/land image */}
                            <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Land" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="text-2xl font-bold">Calamba City, Laguna</h3>
                                <p className="text-green-300 font-semibold">20 Million cu.m. Capacity</p>
                            </div>
                        </div>
                        <div className="p-6">
                            <p className="text-gray-600">Strategic sourcing site providing high-quality backfill materials for major infrastructure projects in CALABARZON.</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg overflow-hidden group">
                        <div className="h-64 bg-gray-200 relative overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1533240332313-0db49b459ad6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Land" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="text-2xl font-bold">Silang, Cavite</h3>
                                <p className="text-green-300 font-semibold">2.2 Million cu.m. Capacity</p>
                            </div>
                        </div>
                        <div className="p-6">
                            <p className="text-gray-600">Secondary sourcing location ensuring consistent supply chain reliability.</p>
                        </div>
                    </div>
                </div>

                {/* Equipment List */}
                <h2 className="text-2xl font-bold text-gray-800 mb-8 border-l-4 border-company-blue pl-4">Heavy Equipment Fleet</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        'Excavators', 'Bulldozers', 'Wheel Loaders', 'Motor Graders',
                        'Road Rollers', 'Dump Trucks (10-Wheeler)', 'Dump Trucks (6-Wheeler)', 'Water Trucks'
                    ].map((item, index) => (
                        <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:bg-white hover:shadow-md transition-all border border-gray-100">
                            <p className="font-bold text-gray-800">{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Resources;
