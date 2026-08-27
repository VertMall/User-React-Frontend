

/**
 * Request permission for browser notifications
 * @returns {Promise<boolean>} - Returns true if permission is granted
 */
export const requestNotificationPermission = async () => {
    if (!("Notification" in window)) {
        console.log("This browser does not support notifications");
        return false;
    }

    const permission = await Notification.requestPermission();
    return permission === "granted";
};

/**
 * Send a browser notification
 * @param {string} title - Notification title
 * @param {string} body - Notification body
 * @param {string} icon - Path to icon image
 * @param {string} url - URL to open when clicked
 * @param {number} orderId - Order ID for tagging
 */
export const sendBrowserNotification = (title, body, icon = '/favicon.ico', url = null, orderId = null) => {
    if (!("Notification" in window)) {
        console.log("This browser does not support notifications");
        return;
    }

    if (Notification.permission !== "granted") {
        console.log("Notification permission not granted");
        return;
    }

    try {
        const notification = new Notification(title, {
            body: body,
            icon: icon,
            tag: `order-${orderId}`,
            requireInteraction: true,
            silent: false,
        });

        if (url) {
            notification.onclick = () => {
                window.focus();
                window.location.href = url;
                notification.close();
            };
        }

        return notification;
    } catch (error) {
        console.error('Error sending notification:', error);
    }
};

/**
 * Play a notification sound
 * @param {string} type - 'beep' or 'custom'
 */
export const playNotificationSound = (type = 'beep') => {
    try {
        if (type === 'beep') {
            // Web Audio API beep sound
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
        } else if (type === 'custom') {
            // Custom sound file
            const audio = new Audio('/sounds/notification.mp3');
            audio.play().catch(e => console.log('Sound error:', e));
        }
    } catch (error) {
        console.log('Sound error:', error);
    }
};

/**
 * Hook to use browser notifications
 * @param {number} userId - User ID for notification channel
 * @param {Function} onNotification - Callback when notification is received
 */
export const useBrowserNotifications = (userId, onNotification) => {
    const [permissionGranted, setPermissionGranted] = React.useState(false);

    React.useEffect(() => {
        if (!userId) return;

        // Request permission when user logs in
        if ("Notification" in window) {
            if (Notification.permission === "granted") {
                setPermissionGranted(true);
            } else if (Notification.permission === "default") {
                requestNotificationPermission().then(granted => {
                    setPermissionGranted(granted);
                });
            }
        }
    }, [userId]);

    return { permissionGranted, requestNotificationPermission, sendBrowserNotification, playNotificationSound };
};
