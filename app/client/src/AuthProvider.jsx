import React, { useState, useMemo } from 'react';
import AuthContext from '@libs/Authorization/AuthContext';

export default function AuthProvider({ children }) {
    // 👇 YOU control the logged-in user here
    const [user, setUser] = useState(null);

    const value = useMemo(() => ({
        user,
        setUser
    }), [user]);

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}
