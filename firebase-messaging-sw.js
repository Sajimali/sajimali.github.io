importScripts('https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/11.6.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyCO6p2DX7cb19ELNHbsDl0ZRQ7kgMvUzGs",
  authDomain: "sajku-store.firebaseapp.com",
  projectId: "sajku-store",
  storageBucket: "sajku-store.appspot.com",
  messagingSenderId: "831227140840",
  appId: "1:831227140840:web:634cc6248ead6ab186075d",
  measurementId: "G-BDH8FP9R56"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/logo.png' // App logo path
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});      
