var firebaseConfig = {
    apiKey: "AIzaSyBk6T9bvwHPpljGSaOSeTMtWR1bovRHAUM",
    authDomain: "personal-a9930.firebaseapp.com",
    databaseURL: "https://personal-a9930.firebaseio.com",
    projectId: "personal-a9930",
    storageBucket: "personal-a9930.appspot.com",
    messagingSenderId: "721725621408",
    appId: "1:721725621408:web:5b8da36e09ecef108935c5",
    measurementId: "G-QQTS21BQBZ"
  };
  // Initialize Firebase
    var defaultProject =  firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    console.log(defaultProject.name);


    firebase.database().ref('subscription-entries').push().set('test');