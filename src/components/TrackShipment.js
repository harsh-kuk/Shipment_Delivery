import React, { useState } from 'react';

const TrackShipment = () => {
    const [trackingNumber, setTrackingNumber] = useState('');
    const [status, setStatus] = useState(null);

    const handleTrack = () => {
        // Placeholder for actual tracking
        setStatus('In Transit');
    };

    return (
        <div>
            <h2>Track Shipment</h2>
            <div>
                <label>Tracking Number</label>
                <input type="text" value={trackingNumber} onChange={(e) => setTrackingNumber(e.target.value)} />
                <button onClick={handleTrack}>Track</button>
            </div>
            {status && <div>Status: {status}</div>}
        </div>
    );
};

export default TrackShipment;
