import React, { useState } from 'react';

const NewShipment = () => {
    const [shipment, setShipment] = useState({
        sender: '',
        receiver: '',
        packageSize: '',
        address: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setShipment((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder for actual shipment creation
        console.log('New Shipment:', shipment);
        alert('Shipment Created');
    };

    return (
        <div>
            <h2>Create New Shipment</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Sender</label>
                    <input type="text" name="sender" value={shipment.sender} onChange={handleChange} required />
                </div>
                <div>
                    <label>Receiver</label>
                    <input type="text" name="receiver" value={shipment.receiver} onChange={handleChange} required />
                </div>
                <div>
                    <label>Package Size</label>
                    <input type="text" name="packageSize" value={shipment.packageSize} onChange={handleChange} required />
                </div>
                <div>
                    <label>Delivery Address</label>
                    <input type="text" name="address" value={shipment.address} onChange={handleChange} required />
                </div>
                <button type="submit">Create Shipment</button>
            </form>
        </div>
    );
};

export default NewShipment;
