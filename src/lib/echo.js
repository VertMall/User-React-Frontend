// src/lib/echo.js
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

// Make Pusher globally available for Laravel Echo
window.Pusher = Pusher;

let echoInstance = null;

export const getEcho = () => {
    if (echoInstance) {
        return echoInstance;
    }

    echoInstance = new Echo({
        broadcaster: 'reverb',
        key: process.env.REACT_APP_REVERB_APP_KEY || 'your-app-key',
        wsHost: process.env.REACT_APP_REVERB_HOST || window.location.hostname,
        wsPort: process.env.REACT_APP_REVERB_PORT || 8080,
        wssPort: process.env.REACT_APP_REVERB_PORT || 8080,
        forceTLS: process.env.REACT_APP_REVERB_SCHEME === 'https',
        enabledTransports: ['ws', 'wss'],
        ...(process.env.REACT_APP_REVERB_SCHEME === 'https' && {
            wssHost: process.env.REACT_APP_REVERB_HOST,
            wssPort: process.env.REACT_APP_REVERB_PORT || 8080,
        })
    });

    return echoInstance;
};

export const listenForOrderUpdates = (userId, callback) => {
    if (!userId) {
        console.warn('No user ID provided, cannot listen for order updates');
        return null;
    }

    const echo = getEcho();
    console.log(`✅ Listening for order updates for user: ${userId}`);

    return echo.private(`user.${userId}`)
        .listen('OrderStatusUpdated', (data) => {
            console.log('📢 Order notification received:', data);
            if (callback) {
                callback(data);
            }
        });
};
