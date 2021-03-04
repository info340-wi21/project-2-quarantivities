import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

function makeMap(props) { // props would be activityObj
    const [clickActivity, setClickedActivity] = useState(null);

    return (
        <Map center={[47.7511, -120.7401]} zoom={6}>
            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                attribution='$copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>' />
            {data.map(activity => ( // change data to our activity data constant
                <Marker
                    key={activity.name}
                    position={[
                        activity.latitude,
                        activity.longitude
                    ]}
                onClick={() => {
                    setClickedActivity(activity);
                }}
                />
            ))}
            {clickActivity && (
                <Popup
                    position={[
                        activity.latitude,
                        activity.longitude
                    ]}
                    onClose={() => {
                        setClickedActivity(null);
                    }}
                >
                    <div>
                        <h2>{activity.name}</h2>
                        <img src={activity.img} alt={activity.name} />
                        <p>{activity.description}</p>
                        <p>{activity.streetAddress}</p>
                    </div>
                </Popup>
            )}
        </Map>
    );
}

export default makeMap;
export {makeMap};