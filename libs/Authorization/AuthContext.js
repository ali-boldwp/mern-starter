import { createContext } from "react";

const AuthContext = createContext({
    user: null,           // default: no user logged in
    setUser: () => {}     // placeholder
});

export default AuthContext;
