import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './context/AuthContext';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import NewShipment from './components/NewShipment';
import TrackShipment from './components/TrackShipment';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Auth isLogin={true} />} />
                    <Route path="/register" element={<Auth isLogin={false} />} />
                    <Route path="/dashboard" element={<PrivateRoute component={Dashboard} />} />
                    <Route path="/new-shipment" element={<PrivateRoute component={NewShipment} />} />
                    <Route path="/track-shipment" element={<PrivateRoute component={TrackShipment} />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

const PrivateRoute = ({ component: Component }) => {
    const { user } = React.useContext(AuthContext);
    return user ? <Component /> : <Navigate to="/" />;
};

export default App;
