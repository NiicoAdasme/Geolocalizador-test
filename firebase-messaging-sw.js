importScripts("https://www.gstatic.com/firebasejs/9.12.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.12.1/firebase-messaging-compat.js");

const firebaseConfig = {
  apiKey: "AIzaSyDLP1QgCr3UV32iIt7C1Kto7bM6KmseXwk",
  authDomain: "perfect-period-364415.firebaseapp.com",
  projectId: "perfect-period-364415",
  storageBucket: "perfect-period-364415.appspot.com",
  messagingSenderId: "468675497403",
  appId: "1:468675497403:web:4bc5e52ffbde365daf489e",
  measurementId: "G-QQETMJR89T"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging(app);

messaging.onBackgroundMessage(payload => {
    console.log('Recibiste una notificacion mientras estaba en segundo plato');
    // Previo al envio de la notificacion
    const notificacionTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: "/vite.svg"
    }

    return self.registration.showNotification(
        notificacionTitle,
        notificationOptions
    )
})