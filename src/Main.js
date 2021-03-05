import './index.css';
import { ActivityList } from './Activity';
import { Search } from './Search';
import { useState } from 'react';
import { MakeMap } from './Map';

export function Main(props) {
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');

    const [firstLoad, setFirstLoad] = useState(true);
    const [showIndoor, setShowIndoor] = useState(true);
    const [showOutdoor, setShowOutoor] = useState(true);

    return (
        <div>
            {/* Search bar goes here */}
            <Search setFirstLoad={setFirstLoad} searchQuery={searchQuery} setSearchQuery={setSearchQuery} showOutdoor={showOutdoor} setShowOutdoor={setShowOutoor} showIndoor={showIndoor} setShowIndoor={setShowIndoor} />

            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <section className="activities-container">

                            {/*<!-- rendered activities will show up here --> */}
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

            <footer>
                <address>Contact us at <a href="mailto:info@quarantivities.com">info@quarantivities.com</a> if you would like to
                    submit an activity to our database.</address>
                    <p>&copy; 2021 Glory Yang, Krystal Graylin, Tony Choi.</p>
            </footer>
        </div>
    )
}