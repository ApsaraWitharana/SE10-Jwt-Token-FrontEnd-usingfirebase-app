

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDjF7s7L3wBrD1Ms_Rt9M0FHG2NWGEB8IY",
    authDomain: "se10-jwt-token-new.firebaseapp.com",
    projectId: "se10-jwt-token-new",
    storageBucket: "se10-jwt-token-new.appspot.com",
    messagingSenderId: "796556186964",
    appId: "1:796556186964:web:7634bbdeb00d696a19a4c1"
};

// Initialize Firebase app
 firebase.initializeApp(firebaseConfig);

// Get Authentication instance
const auth = firebase.auth();
// Sign up logic
document.addEventListener('DOMContentLoaded', (event) => {
    const regButton = document.getElementById('signup');
    if (regButton) {
        regButton.addEventListener('click', () => {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            auth.createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    window.location.href = "../dashboard.html";
                    // Registered successfully
                    alert("Registered Successfully!!!");
                    const user = userCredential.user;
                    // You can add more actions here
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(`Error: ${errorMessage}`);
                });
        });
    }
});


//signIn - using ath model
document.addEventListener('DOMContentLoaded', (event) => {
    const logInButton = document.getElementById('logIn');
    if (logInButton) {
        logInButton.addEventListener('click', () => {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            auth.signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    // Login successful
                    alert("Login Successful!!!");
                    const user = userCredential.user;
                    // You can add more actions here
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(`Error: ${errorMessage}`);
                });
        });
    }
});
