import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <div>
            <h1>Welcome, {user.email}</h1>
            <nav>
                <Link to="/new-shipment">Create New Shipment</Link>
                <Link to="/track-shipment">Track Shipment</Link>
            </nav>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Dashboard;
