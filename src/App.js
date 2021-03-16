import './index.css';
import { AboutNav } from './AboutNav';
import { AboutPage } from './About';
import { LikedPage } from './Liked'
import { Main } from './Main';
import { Route, Switch, Redirect } from 'react-router-dom';

import firebase from 'firebase/app';
import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { useEffect, useState } from 'react';
// FirebaseUI config
const uiConfig = {
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: true
    }
  ],
  credentialHelper: 'none',
  callbacks: {
    // avoids redirecting after sign-in
    signInSuccessWithAuthResult: () => false
  }
}



function App(props) {


  // holds the current site user
  const [user, setUser] = useState(undefined);
  const [likedArray, setLikedArray] = useState([]);
  const [likedIds, setLikedIds] = useState([]); //activity IDs
  // handle sign-out
  const handleSignOut = () => {
    firebase.auth().signOut();
    setLikedIds([]);
  }

  // auth state event listener
  useEffect(() => { // run after component loads
    // listen for changes
    firebase.auth().onAuthStateChanged((firebaseUser) => {
      // auth state has changed
      console.log("auth state has changed!");
      setUser(firebaseUser);
    })
  })

  let app = null; // content that will render

  if (!user) { // if user is logged out
    app = (
      <div className="container">
        <div className="header pb-5">
          <header>
            <h1>Quarantivities</h1>
            <p>Fun & Safe Activities in the Pacific Northwest</p>
          </header>
        </div>

        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    );

  } else { // if user is logged in
    app = (
      <div>
        <section className="header">
          <header>
            <h1>Quarantivities</h1>
            <p>Fun & Safe Activities in the Pacific Northwest</p>
          </header>


          <div className="form-inline">
            <AboutNav />
            <button className="btn btn-sm btn-outline-secondary ml-3 mb-2" onClick={handleSignOut}>Log Out</button>
          </div>
        </section>

        <main>
          <Switch>
            <Route exact path="/"><Main activities={props.activities} likedArray={likedArray} setLikedArray={setLikedArray} currentUser={user} /></Route>
            <Route path="/About"><AboutPage /></Route>
            <Route path="/Liked"><LikedPage activities={props.activities} likedIds={likedIds} setLikedIds={setLikedIds} currentUser={user} /></Route>
            <Redirect to="/" />
          </Switch>
        </main>

        <footer>
          <address>Contact us at <a href="mailto:info@quarantivities.com">info@quarantivities.com</a> if you would like to
          submit an activity to our database.</address>
          <p>Heart icon by Three Six Five from the Noun Project</p>
          <p>&copy; 2021 Glory Yang, Krystal Graylin, Tony Choi.</p>
        </footer>

        {/*<!-- Load JavaScript libraries -->*/}
        <script src="js/index.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/fetch/2.0.3/fetch.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/es6-promise/4.2.8/es6-promise.min.js"></script>

      </div>
    );
  }

  return (app);
}

export default App;