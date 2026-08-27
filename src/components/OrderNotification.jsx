import React, { useEffect, useState } from 'react';
import { listenForOrderUpdates } from '../lib/echo';

const OrderNotification = ({ userId }) => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        if (!userId) {
            console.warn('No userId provided to OrderNotification component');
            return;
        }

        const channel = listenForOrderUpdates(userId, (data) => {
            setNotifications(prev => [{
                id: Date.now(),
                orderId: data.order_id,
                message: data.message,
                status: data.order_status,
                timestamp: data.timestamp
            }, ...prev]);

            showToastNotification(data);
        });

        return () => {
            if (channel) {
                channel.stopListening('OrderStatusUpdated');
            }
        };
    }, [userId]);

    const showToastNotification = (data) => {
        const toast = document.createElement('div');
        toast.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: #4CAF50;
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            z-index: 9999;
            max-width: 350px;
            animation: slideIn 0.3s ease;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        `;
        toast.innerHTML = `
            <div>
                <strong>📦 Order #${data.order_id}</strong>
                <p style="margin: 5px 0 0; font-size: 14px;">${data.message}</p>
                <small style="opacity: 0.7; font-size: 12px;">${new Date(data.timestamp).toLocaleTimeString()}</small>
            </div>
        `;
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transition = 'opacity 0.3s';
            setTimeout(() => toast.remove(), 300);
        }, 5000);
    };

    return (
        <div style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            zIndex: 9998,
            maxWidth: '400px',
            width: '100%'
        }}>
            {notifications.slice(0, 5).map((notif) => (
                <div key={notif.id} style={{
                    backgroundColor: 'white',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    borderRadius: '8px',
                    padding: '15px',
                    marginBottom: '10px',
                    borderLeft: '4px solid #4CAF50',
                    animation: 'slideIn 0.3s ease'
                }}>
                    <p style={{ fontWeight: 'bold', margin: '0 0 5px 0' }}>
                        Order #{notif.orderId}
                    </p>
                    <p style={{ margin: '0 0 5px 0', fontSize: '14px', color: '#555' }}>
                        {notif.message}
                    </p>
                    <span style={{ fontSize: '12px', color: '#999' }}>
                        {new Date(notif.timestamp).toLocaleTimeString()}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default OrderNotification;
