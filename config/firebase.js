const admin = require('firebase-admin');
const serviceAccount = require('../otp-project-b6b7b-firebase-adminsdk-qzzak-ba8878518d.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;
