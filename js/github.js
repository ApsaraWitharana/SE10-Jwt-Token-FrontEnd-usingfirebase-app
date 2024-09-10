import { getAuth, GithubAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/8.10.0/firebase-auth.js";

// Initialize Firebase
const auth = getAuth();
const provider = new GithubAuthProvider();

document.getElementById('github-btn').addEventListener('click', () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GithubAuthProvider.credentialFromResult(result);
            const user = result.user;
            console.log(user);
            window.location.href = "../dashboard.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(`Error Code: ${errorCode}, Error Message: ${errorMessage}`);
        });
});
