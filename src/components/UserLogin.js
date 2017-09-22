import React, { Component }  from 'react'
import {firebase, database, auth, fbProvider, googleProvider, twitterProvider} from './Firebase'
import map from 'lodash/map'
import Nav from './Navigation'

const defaultMessaging = {
  message: "Welcome. Please login for the full Park Ranger experience",
  user: "i dont know you. login so we can meet"
};

class UserLogin extends Component {
  constructor() {
    super();
    this.state = {
      ...defaultMessaging,
      isLoggedIn: null,
      parks: []
    };

    this.parkListRef = database.ref('parks/0/coasters');
  }

  componentDidMount() {
    auth.onAuthStateChanged((isLoggedIn) => {
      this.setState({message: "Thank you for logging in", isLoggedIn})
      console.log('youre still logged in homie', isLoggedIn)
      this.getDatabaseInfo();
    })

  }

  componentDidUpdate(prevProps, prevState) {
    const prevLoggedIn = prevState && prevState.isLoggedIn;
    const loggedIn = this.state.isLoggedIn;
  }

  getDatabaseInfo() {
    console.log('fetching database data')
    this.parkListRef.once('value', snap => {
      console.log(snap.val())
      this.setState({parks: snap.val()})
    });
  }

loginWithFacebook() {
  auth.signInWithPopup(fbProvider).then(function(result) {
    var token = result.credential.accessToken;
    this.setState({user: result.user, isLoggedIn: true});
  }.bind(this));
};

  loginWithGoogle() {
    auth.signInWithPopup(googleProvider).then(function(result) {
      var token = result.credential.accessToken;
      this.setState({user: result.user, isLoggedIn: true});
  }.bind(this));
};

  loginWithTwitter() {
    auth.signInWithPopup(twitterProvider).then(function(result) {
      var token = result.credential.accessToken;
      this.setState({user: result.user, isLoggedIn: true});
    }.bind(this));
  };

  logOut() {
    auth.signOut().then(function() {
      this.setState({user: null, isLoggedIn: false, ...defaultMessaging});
    }.bind(this));
  };
  render() {
    return (
      <div className="App">
        <h3>{this.state.message}</h3>
        {!this.state.isLoggedIn &&
        <div>
          <h5>{this.state.user}</h5>
          <button onClick={this.loginWithFacebook.bind(this)}>Login with Facebook</button>
          <button onClick={this.loginWithGoogle.bind(this)}>Login with Google</button>
          <button onClick={this.loginWithTwitter.bind(this)}>Login with Twitter</button>
        </div>
        }

        {this.state.isLoggedIn &&
          <div>
            <h5>{this.state.isLoggedIn.displayName}</h5>
            <h5>{this.state.isLoggedIn.email}</h5>
            <img src={this.state.isLoggedIn.photoURL} alt={this.state.isLoggedIn.displayName}/>
            <button onClick={this.logOut.bind(this)}>Log Out</button>
            {this.state.parks.map((park, key) => <p key={key} className={park.coasterActive}>{park.coasterName}</p>)}
          </div>
        }
        <Nav />
      </div>

    )
  }
}

export default UserLogin
