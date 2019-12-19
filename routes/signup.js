const express = require('express');
const alert = require('alert-node');
const bodyParser = require('body-parser');
const router = express.Router();
const fs = require('fs');
let founderror = false;
router.use(bodyParser.urlencoded({ extended: false }));
const firebase = require("../models/connect")
router.get('/signup', (req, res, next) => {
    res.render('signup')
});
router.get('/signin', (req, res, next) => {
    res.render('signup')
});

router.post('/signup', (req, res, next) => {
    var email = req.body.signupemail;
    var password = req.body.signuppassword;
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(function(error) {


            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
                console.log('The password is too weak.');
            } else {

                console.log(errorMessage);


            }
            console.log(error);


        });
    res.redirect('/signin');
});

router.post('/signin', (req, res, next) => {

    var loginemail = req.body.loginemail;
    var loginpassword = req.body.loginpassword;
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(loginemail, loginpassword)

    promise.catch(e => {
        alert(e.message);
        res.redirect('/signin')
    })
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            res.redirect('/')
        }
    })
});

module.exports = router;