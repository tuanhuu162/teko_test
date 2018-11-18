const firestoreService = require('firestore-export-import');
const serviceAccount = require("./service_key.json");

firestoreService.initializeApp(serviceAccount,"https://teko-449de.firebaseio.com");
firestoreService.restore('./data.json')