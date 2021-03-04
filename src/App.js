//import logo from './logo.svg';
import './index.css';
import { ActivityList } from './Activity';

function App(props) {
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

      <form className="form-inline">
        <label for="keyword">Search</label>
        <input type="text" className="form-control mb-2 ml-sm-2 mr-sm-4" id="keyword" placeholder="ex. trail, Kirkland, etc." />

        <div className="form-check mb-2 mr-sm-2">
          <input className="form-check-input" type="checkbox" id="outdoor" checked="true" />
          <label className="form-check-label" for="outdoor">outdoor</label>
        </div>

        <div className="form-check mb-2 mr-sm-4">
          <input className="form-check-input" type="checkbox" id="indoor" checked="true" />
          <label className="form-check-label" for="indoor">indoor</label>
        </div>

        <button type="submit" id="submit" className="btn btn-info mb-2">Submit</button>

        <p className="activity-counter" id="activity-counter"></p>
      </form>

      <div className="container">
        <div className="row">
          <div className="col-8">
            <section className="activities-container">
              <ActivityList activities={props.activities}/>
              {/*<!-- rendered activities will show up here --> */}

            </section>
          </div>

          <div className="col-4">
            <div className="map" id="map" aria-label="interactive map of all activities">
              {/*<!-- map will show up here --> */}
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
