const api = "AIzaSyALAqRFXFxJkz2mj0d_Egs8JogNQPIeWAs"

const firebaseConfig = {
    apiKey: api,
    authDomain: "click-bible-challenge-cogop.firebaseapp.com",
    projectId: "click-bible-challenge-cogop",
    appId: "1:XXXX:web:XXXX"
  };

  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();