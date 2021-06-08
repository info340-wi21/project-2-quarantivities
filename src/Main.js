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
        <div className="container">
            {/* Search bar goes here */}
            <Search setFirstLoad={setFirstLoad} searchQuery={searchQuery} setSearchQuery={setSearchQuery} showOutdoor={showOutdoor} setShowOutdoor={setShowOutoor} showIndoor={showIndoor} setShowIndoor={setShowIndoor} />

            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="map" id="map" aria-label="interactive map of all activities">
                            {/*<!-- map will show up here --> */}
                            <MakeMap activities={props.activities} firstLoad={firstLoad} searchQuery={searchQuery} showOutdoor={showOutdoor} showIndoor={showIndoor} />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <section className="activities-container">

                            {/*<!-- rendered activities will show up here --> */}
                            <ActivityList activities={props.activities} firstLoad={firstLoad} searchQuery={searchQuery} showOutdoor={showOutdoor} showIndoor={showIndoor} currentUser={props.currentUser} />
                         </section>
                    </div>
                </div>
            </div>
        </div>
    )
}