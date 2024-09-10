
import { initializeApp } from "https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/8.10.0/firebase-auth.js";
import { firebaseConfig } from "/js/auth";
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();



document.getElementById('google-btn').addEventListener('click', () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            let user = result.user;
            alert(`${user.displayName}, Credentials: ${credential}`);
            window.location.href = "../dashboard.html"; // Redirect after login
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(`Error Code: ${errorCode}, Error Message: ${errorMessage}`);
        });
});