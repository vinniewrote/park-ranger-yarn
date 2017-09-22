import * as firebase from 'firebase'

const config = {
    apiKey: 'AIzaSyBsS0qdFQkJOJXSCVSJ2C05nzUruMaI05Q',
    authDomain: 'park-ranger-db.firebaseapp.com',
    databaseURL: 'https://park-ranger-db.firebaseio.com',
    projectId: 'park-ranger-db',
    storageBucket: 'park-ranger-db.appspot.com',
    messagingSenderId: '927027694347'
}

firebase.initializeApp(config)

export default firebase

export const database = firebase.database()
export const auth = firebase.auth()
export const fbProvider = new firebase.auth.FacebookAuthProvider()
export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const twitterProvider = new firebase.auth.TwitterAuthProvider()
