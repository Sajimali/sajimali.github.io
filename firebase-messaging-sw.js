// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/11.6.0/firebase-messaging.js');

// Your Firebase Config (Same as in your HTML files)
const firebaseConfig = {
  apiKey: "AIzaSyCO6p2DX7cb19ELNHbsDl0ZRQ7kgMvUzGs",
  authDomain: "sajku-store.firebaseapp.com",
  projectId: "sajku-store",
  storageBucket: "sajku-store.appspot.com",
  messagingSenderId: "831227140840",
  appId: "1:831227140840:web:634cc6248ead6ab186075d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Background Message Handler (When app is closed)
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message:', payload);
  
  // Customize notification
  const notificationTitle = payload.notification?.title || "New Notification";
  const notificationOptions = {
    body: payload.notification?.body || "You have a new message",
    icon: '/icon-192x192.png', // Make sure this exists in root folder
    vibrate: [200, 100, 200] // Vibration pattern for mobile
  };

  // Show notification
  return self.registration.showNotification(notificationTitle, notificationOptions);
});

// Optional: Add click event listener for notifications
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  // Example: Open your app when notification is clicked
  event.waitUntil(
    clients.openWindow('https://yourdomain.com/dashboard.html')
  );
});
