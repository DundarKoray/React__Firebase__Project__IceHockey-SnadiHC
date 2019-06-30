import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

const config = {
    apiKey: "AIzaSyCesahK4E7bETGIkqe_1kXqBJXBMPQN6fE",
    authDomain: "man-city-8faac.firebaseapp.com",
    databaseURL: "https://man-city-8faac.firebaseio.com",
    projectId: "man-city-8faac",
    storageBucket: "man-city-8faac.appspot.com",
    messagingSenderId: "1044080517204",
    appId: "1:1044080517204:web:158d3d9604301c9a"
  };

  firebase.initializeApp(config);

  const firebaseDB = firebase.database()
  const firebaseMatches = firebaseDB.ref('matches')
  const firebasePromotions = firebaseDB.ref('promotions')
  const firebaseTeams = firebaseDB.ref('teams')
  const firebasePlayers = firebaseDB.ref('players')

  export {
      firebase,
      firebaseMatches,
      firebasePromotions,
      firebaseTeams,
      firebasePlayers,
      firebaseDB
  }
 