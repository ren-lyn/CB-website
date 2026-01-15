import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../api/axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [loading, setLoading] = useState(true);

    const login = async (email, password) => {
        try {
            // CSRF cookie for Sanctum SPA (if needed, but we use API token for simplicity here)
            // await api.get('/sanctum/csrf-cookie'); 
            const response = await api.post('/login', { email, password });
            const { token: newToken, user: newUser } = response.data;

            localStorage.setItem('token', newToken);
            setToken(newToken);
            setUser(newUser);
            return true;
        } catch (error) {
            console.error('Login failed', error);
            throw error;
        }
    };

    const logout = async () => {
        try {
            await api.post('/logout');
        } catch (e) {
            console.error(e);
        } finally {
            localStorage.removeItem('token');
            setToken(null);
            setUser(null);
        }
    };

    useEffect(() => {
        const fetchUser = async () => {
            if (!token) {
                setLoading(false);
                return;
            }
            try {
                const response = await api.get('/user');
                setUser(response.data);
            } catch (error) {
                console.error(error);
                localStorage.removeItem('token');
                setToken(null);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [token]);

    return (
        <AuthContext.Provider value={{ user, token, login, logout, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
