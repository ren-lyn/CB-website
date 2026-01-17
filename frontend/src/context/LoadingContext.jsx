import React, { createContext, useContext, useState, useEffect } from 'react';
import axiosClient from '../lib/axios';

const LoadingContext = createContext();

export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider = ({ children }) => {
    const [loadingCount, setLoadingCount] = useState(0);

    useEffect(() => {
        const reqInterceptor = axiosClient.interceptors.request.use(
            (config) => {
                setLoadingCount(prev => prev + 1);
                return config;
            },
            (error) => {
                setLoadingCount(prev => prev - 1);
                return Promise.reject(error);
            }
        );

        const resInterceptor = axiosClient.interceptors.response.use(
            (response) => {
                setLoadingCount(prev => Math.max(0, prev - 1));
                return response;
            },
            (error) => {
                setLoadingCount(prev => Math.max(0, prev - 1));
                return Promise.reject(error);
            }
        );

        return () => {
            axiosClient.interceptors.request.eject(reqInterceptor);
            axiosClient.interceptors.response.eject(resInterceptor);
        };
    }, []);

    return (
        <LoadingContext.Provider value={{ isLoading: loadingCount > 0 }}>
            {children}
        </LoadingContext.Provider>
    );
};
