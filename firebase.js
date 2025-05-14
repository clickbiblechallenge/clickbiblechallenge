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

  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
      .then(result => {
        const user = result.user;
        showUser(user);
        window.location.reload();
      })
      .catch(error => {
        console.error("Erreur de connexion :", error);
      });
  }

  function signOut() {
    auth.signOut().then(() => {
      document.getElementById("user-info").style.display = "none";
      document.getElementById("auth-buttons").style.display = "block";
      localStorage.removeItem("user");
      window.location.reload();
    });
  }

  function showUser(user) {
    document.getElementById("auth-buttons").style.display = "none";
    document.getElementById("user-info").style.display = "flex";
    document.getElementById("user-name").textContent = user.displayName;
    document.getElementById("user-photo").src = user.photoURL;
    localStorage.setItem("user", JSON.stringify(user));
  }

  // Affiche l'utilisateur si déjà connecté
  auth.onAuthStateChanged(user => {
    if (user) showUser(user);
  });