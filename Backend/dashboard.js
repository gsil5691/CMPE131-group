import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, signOut, onAuthStateChanged, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyA3I2rDcDKGEhCJqeIwmVlWU_RpUcrJdpo",
    authDomain: "login-131.firebaseapp.com",
    databaseURL: "https://login-131-default-rtdb.firebaseio.com",
    projectId: "login-131",
    storageBucket: "login-131.appspot.com",
    messagingSenderId: "664834756112",
    appId: "1:664834756112:web:048827ee0191274ac70495"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, function (user) {
    if (user) {
        const currentUser = auth.currentUser;
        document.getElementById("email").value = currentUser.email;
        document.getElementById("username").value = currentUser.displayName;
    } else {
        window.location.href = "index.html";
    }
});

const logout = document.getElementById("logout");
logout.addEventListener("click", function (event) {
    event.preventDefault();
    signOut(auth).then(
        function () {
            alert("Logging out...");
            window.location.href = "index.html";
        }
    ).catch(function () {
        alert("Error, can't logout...");
    });
});

const confirmReset = document.getElementById("confirmReset");
confirmReset.addEventListener("click", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    sendPasswordResetEmail(auth, email)
        .then(function () {
            alert("Password reset email sent!");
            location.reload();
        })
        .catch(function (error) {
            alert(error.message);
        });
});
