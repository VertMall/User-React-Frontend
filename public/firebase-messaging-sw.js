importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js",
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js",
);
// // Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyB_pvIHUWqtISXzJBZimnfoecAZndtpySA",
  authDomain: "thevertmall.firebaseapp.com",
  projectId: "thevertmall",
  storageBucket: "thevertmall.firebasestorage.app",
  messagingSenderId: "863430607060",
  appId: "1:863430607060:web:86b374d40a5518e4ae3b41",
  measurementId: "G-T4PX6C3G3K",
};

firebase?.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase?.messaging();

messaging.onBackgroundMessage(function (payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
