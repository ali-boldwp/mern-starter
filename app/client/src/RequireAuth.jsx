// src/RequireAuth.jsx
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AuthContext from '@libs/Authorization/AuthContext';

export default function RequireAuth({ allowedRoles, children }) {
    const { user } = useContext(AuthContext);
    const location = useLocation();

    // Not logged in → redirect to login
    if (!user) {
        return (
            <Navigate
                to="/login"
                replace
                state={{ from: location }}
            />
        );
    }

    // Logged in but role not allowed
    if (allowedRoles && !allowedRoles.includes(user.role)) {
        return <Navigate to="/unauthorized" replace />;
    }

    return children;
}
