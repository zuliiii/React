var firebaseConfig = {
    apiKey: "AIzaSyAEP1DLoEBDHUO2vs5gwnI5uThV2lPDCSk",
    authDomain: "ascendant-line-299509.firebaseapp.com",
    projectId: "ascendant-line-299509",
    storageBucket: "ascendant-line-299509.appspot.com",
    messagingSenderId: "992769012780",
    appId: "1:992769012780:web:4f583723aae10685a1cd89"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();

  databse.ref().set({
      title: "first app"
  })