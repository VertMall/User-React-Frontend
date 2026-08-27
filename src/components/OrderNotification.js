// src/components/OrderNotification.jsx
import React, { useEffect, useState } from 'react';
import { listenForOrderUpdates } from '../lib/echo';

const OrderNotification = ({ userId }) => {
    const [notifications, setNotifications] = useState([]);
    const [permissionGranted, setPermissionGranted] = useState(false);

    useEffect(() => {
        if (userId && "Notification" in window) {
            if (Notification.permission === "granted") {
                setPermissionGranted(true);
            } else if (Notification.permission === "default") {
                Notification.requestPermission().then(granted => {
                    setPermissionGranted(granted === "granted");
                });
            }
        }
    }, [userId]);

    useEffect(() => {
        if (!userId) {
            console.warn('No userId provided');
            return;
        }

        // Check if Echo is available
        try {
            const channel = listenForOrderUpdates(userId, (data) => {
                setNotifications(prev => [{
                    id: Date.now(),
                    orderId: data.order_id,
                    message: data.message,
                    status: data.order_status,
                    timestamp: data.timestamp
                }, ...prev]);

                // Play sound
                try {
                    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                    const oscillator = audioContext.createOscillator();
                    const gainNode = audioContext.createGain();
                    oscillator.connect(gainNode);
                    gainNode.connect(audioContext.destination);
                    oscillator.frequency.value = 800;
                    oscillator.type = 'sine';
                    gainNode.gain.value = 0.3;
                    oscillator.start();
                    setTimeout(() => oscillator.stop(), 300);
                } catch (e) {
                    console.log('Sound error:', e);
                }

                // Browser notification
                if (permissionGranted && "Notification" in window) {
                    try {
                        const notification = new Notification(`📦 Order #${data.order_id} Updated`, {
                            body: data.message,
                            icon: '/favicon.ico',
                            tag: `order-${data.order_id}`,
                            requireInteraction: true,
                            silent: false,
                        });
                        notification.onclick = () => {
                            window.focus();
                            window.location.href = `/orders/${data.order_id}`;
                            notification.close();
                        };
                    } catch (e) {
                        console.log('Notification error:', e);
                    }
                }

                // Toast
                showToastNotification(data);
            });

            return () => {
                if (channel) {
                    channel.stopListening('OrderStatusUpdated');
                }
            };
        } catch (e) {
            console.warn('Echo not available, skipping notification listener');
        }
    }, [userId, permissionGranted]);

    // ... rest of component (showToastNotification and return statement)
};

export default OrderNotification;
