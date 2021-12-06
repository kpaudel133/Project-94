const firebaseConfig = {
    apiKey: "AIzaSyAhQCYxsjW_eewQKqy9SaQhOklwadv3lEM",
    authDomain: "kwitter-project-a8d12.firebaseapp.com",
    databaseURL: "https://kwitter-project-a8d12-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-a8d12",
    storageBucket: "kwitter-project-a8d12.appspot.com",
    messagingSenderId: "527160163493",
    appId: "1:527160163493:web:ef2e5e5564f5758c3de14c",
    measurementId: "G-3GGEKKH2RX"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);