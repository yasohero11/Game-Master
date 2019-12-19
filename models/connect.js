const firebase = require('firebase');
firebase.initializeApp({
    apiKey: "AIzaSyACg4shxSJvF2QCdNuWJ84vjMeKidrapTc",
    authDomain: "game-65654.firebaseapp.com",
    databaseURL: "https://game-65654.firebaseio.com",
    projectId: "game-65654",
    storageBucket: "game-65654.appspot.com",
    messagingSenderId: "276974278587",
    appId: "1:276974278587:web:6b5666e2d78f99e390d69e",
    measurementId: "G-623XPZVX8J"

})
var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://game-65654.firebaseio.com"
});

module.exports = firebase;