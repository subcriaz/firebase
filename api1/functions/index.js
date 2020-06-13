const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const admin = require('firebase-admin');
const gqlServer=require('./server/index1')

admin.initializeApp();

var server=gqlServer()

exports.api1=functions.https.onRequest(server)

