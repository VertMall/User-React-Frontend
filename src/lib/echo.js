// src/lib/echo.js
let Echo = null;
let Pusher = null;

try {
    // Try to import the packages
    Echo = require('laravel-echo').default;
    Pusher = require('pusher-js');
} catch (e) {
    console.warn('Laravel Echo or Pusher not installed. Notifications will not work.');
}

let echoInstance = null;

export const getEcho = () => {
    // If packages are not installed, return null
    if (!Echo || !Pusher) {
        console.warn('Echo/Pusher not available');
        return null;
    }

    if (echoInstance) {
        return echoInstance;
    }

    window.Pusher = Pusher;

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
    if (!echo) {
        console.warn('Echo not initialized, notifications unavailable');
        return null;
    }

    console.log(`✅ Listening for order updates for user: ${userId}`);

    return echo.private(`user.${userId}`)
        .listen('OrderStatusUpdated', (data) => {
            console.log('📢 Order notification received:', data);
            if (callback) {
                callback(data);
            }
        });
};
