import React from 'react';
import { useLoading } from '../context/LoadingContext';

const LoadingOverlay = () => {
    const { isLoading } = useLoading();

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-[2px] transition-all duration-300">
            <div className="bg-white p-4 rounded-full shadow-xl">
                <div className="animate-spin rounded-full h-10 w-10 border-4 border-gray-200 border-t-blue-600"></div>
            </div>
        </div>
    );
};

export default LoadingOverlay;
