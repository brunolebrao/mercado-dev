const config = {
    apiKey: "AIzaSyCJqrty5e3RcXvDZqQ6hzohV-4arg-dDYU",
    authDomain: "mercadodev-12093.firebaseapp.com",
    databaseURL: "https://mercadodev-12093.firebaseio.com",
    projectId: "mercadodev-12093",
    storageBucket: "gs://mercadodev-12093.appspot.com",
    messagingSenderId: "1027430688656"
  };

  const Rebase = require('re-base')
  const firebase = require('firebase/app')
  require('firebase/database')
  require('firebase/storage')

  const app = firebase.initializeApp(config)
  const base = Rebase.createClass(app.database())

  export const storage = app.storage()

  export default base