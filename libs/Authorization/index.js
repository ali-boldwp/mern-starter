// ../../libs/Authorization/index.js

import React, { createContext, useState, useMemo } from 'react';

// Create the auth context
const AuthContext = createContext({
    user: null,
    setUser: () => {}
});

// AuthProvider component WITHOUT JSX
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const value = useMemo(
        () => ({ user, setUser }),
        [user]
    );

    // Instead of:
    // return (
    //   <AuthContext.Provider value={value}>
    //     {children}
    //   </AuthContext.Provider>
    // );

    return React.createElement(
        AuthContext.Provider,
        { value },
        children
    );
};

export default AuthContext;
