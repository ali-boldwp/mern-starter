import './App.css';
import AppContext from "./AppContext";
import routes from "./config/routesConfig"
import {BrowserRouter} from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Authorization from '@libs/Authorization/index'
import AuthProvider from './AuthProvider';

function App() {
    return (
        <AppContext.Provider
            value={{
                routes
            }}
        >
            <AuthProvider>
                <BrowserRouter>
                    <AppRoutes/>
                </BrowserRouter>
            </AuthProvider>

        </AppContext.Provider>
    );
}

export default App;
