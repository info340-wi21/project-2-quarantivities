//import logo from './logo.svg';
import './index.css';
import { ActivityList } from './Activity';
import { Search } from './Search';
import { useState } from 'react';
import { MakeMap } from './Map';

function App(props) {

  // create constants for search
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');

  const [firstLoad, setFirstLoad] = useState(true);
  const [showIndoor, setShowIndoor] = useState(true);
  const [showOutdoor, setShowOutoor] = useState(true);

  //? const [relevantActivities, setRelevantActivities] = useState(props.activities);



  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div>
      <section className="header">
        <div>
          <header>
            <h1>Quarantivities</h1>
            <p>Fun & Safe Activities in the Pacific Northwest</p>
          </header>
        </div>

        <div>
          <nav>
            <div id="hamburger-menu">
              <div className="menu-link" id="about-link">
                <a href="about.html">About</a>
              </div>
            </div>
          </nav>
        </div>
      </section>

      <main>

        {/* Search bar goes here */}
        <Search setFirstLoad={setFirstLoad} searchQuery={searchQuery} setSearchQuery={setSearchQuery} showOutdoor={showOutdoor} setShowOutdoor={setShowOutoor} showIndoor={showIndoor} setShowIndoor={setShowIndoor} />

        <div className="container">
          <div className="row">
            <div className="col-8">
              <section className="activities-container">

                {/*<!-- rendered activities will show up here -->
                removed: setRelevantActivities={setRelevantActivities} relevantActivities={relevantActivities}  */}
                <ActivityList activities={props.activities} firstLoad={firstLoad} searchQuery={searchQuery} showOutdoor={showOutdoor} showIndoor={showIndoor} />


              </section>
            </div>

            <div className="col-4">
              <div className="map" id="map" aria-label="interactive map of all activities">
                {/*<!-- map will show up here --> */}
                {/* <MakeMap props={props.activities} /> */}
                <MakeMap activities={props.activities} />
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <address>Contact us at <a href="mailto:info@quarantivities.com">info@quarantivities.com</a> if you would like to
        submit an activity to our database.</address>
        <p>&copy; 2021 Glory Yang, Krystal Graylin, Tony Choi.</p>
      </footer>

      {/*<!-- Load JavaScript libraries -->*/}
      <script src="js/index.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/fetch/2.0.3/fetch.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/es6-promise/4.2.8/es6-promise.min.js"></script>

    </div>
  );
}

export default App;