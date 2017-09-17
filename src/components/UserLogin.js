import React, { Component }  from 'react'
import * as firebase from 'firebase'
import {config} from '../data/keys'

firebase.initializeApp(config)

const fbProvider = new firebase.auth.FacebookAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const twitterProvider = new firebase.auth.TwitterAuthProvider();

const defaultMessaging = {
  message: "Welcome. Please login for the full Park Ranger experience",
  user: "unknown user. login so we can know you"
};

class UserLogin extends Component {
  constructor() {
    super();
    this.state = {
      ...defaultMessaging,
      isLoggedIn: false
    };
  }

  componentDidMount() {
    if (this.state.isLoggedIn) {
      this.getDatabaseInfo();
    }

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log('user is signed in');
      } else {
        console.log('no user signed in');
      }
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const prevLoggedIn = prevState && prevState.isLoggedIn;
    const loggedIn = this.state.isLoggedIn;

    if (loggedIn && !prevLoggedIn) {
      this.getDatabaseInfo();
    }
  }

  getDatabaseInfo() {
    const entryRef = firebase.database().ref("entries");
    const entryData =[];
    entryRef.on('value',snap => {
       this.setState({
         data: snap.val()
       });
      //  snap.forEach(function(entryNodes){
      //    console.log(entryNodes.val().entryDate);
      //    console.log(entryNodes.val().entryTitle);
      //     // const entryArray = entryData.push(entryNodes.val().entryDate);
      //     // console.log(entryArray);
      //  });
      //  this.setState({
      //    message: entryArray
      //  });
    });
  }
loginWithFacebook() {
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
     .then(function() {
       return firebase.auth().signInWithPopup(fbProvider).then(function(result) {
         var token = result.credential.accessToken;
         this.setState({user: result.user, isLoggedIn: true});
       })
     }.bind(this));
};

  loginWithGoogle() {
    firebase.auth().signInWithPopup(googleProvider).then(function(result) {
      var token = result.credential.accessToken;
      this.setState({user: result.user, isLoggedIn: true});
  }.bind(this));
};

  loginWithTwitter() {
    firebase.auth().signInWithPopup(twitterProvider).then(function(result) {
      var token = result.credential.accessToken;
      this.setState({user: result.user, isLoggedIn: true});
    }.bind(this));
  };

  logOut() {
    firebase.auth().signOut().then(function() {
      this.setState({user: null, isLoggedIn: false, ...defaultMessaging});
    }.bind(this));
  };
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React my guy</h2>
        </div>
          <h3>{this.state.message}</h3>

        <h5>{this.state.isLoggedIn ? this.state.user.displayName : this.state.user}</h5>
        <img src={this.state.user.photoURL} />

        {!this.state.isLoggedIn && <div><button onClick={this.loginWithFacebook.bind(this)}>Login with Facebook</button>
        <button onClick={this.loginWithGoogle.bind(this)}>Login with Google</button>
        <button onClick={this.loginWithTwitter.bind(this)}>Login with Twitter</button></div>}
        {this.state.isLoggedIn && <button onClick={this.logOut.bind(this)}>Log Out</button>}

      </div>
    )
  }
}

export default UserLogin
