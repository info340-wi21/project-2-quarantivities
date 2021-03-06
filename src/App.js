//import logo from './logo.svg';
import './index.css';
import { AboutNav } from './AboutNav';
import { AboutPage } from './About';
import { Main } from './Main';
import { Route, Switch, Redirect } from 'react-router-dom';

function App(props) {

  return (
    <div>
      <section className="header">
        <div>
          <header>
            <h1>Quarantivities</h1>
            <p>Fun & Safe Activities in the Pacific Northwest</p>
          </header>
        </div>

        <div>
          <div>
            <AboutNav />
          </div>
        </div>
      </section>

      <main>
        <Switch>
          <Route exact path="/"><Main activities={props.activities} /></Route>
          <Route path="/About"><AboutPage /></Route>
          <Redirect to="/" />
        </Switch>
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