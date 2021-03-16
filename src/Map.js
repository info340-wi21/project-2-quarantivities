import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

export function MakeMap(props) { // props would be activityObj

    let searchQuery = props.searchQuery;
    let firstLoad = props.firstLoad;
    let showOutdoor = props.showOutdoor;
    let showIndoor = props.showIndoor;
    let filteredActivities = [];

    props.activities.map((activity) => {

        let activityDetails = (activity.name + " " + activity.description + " " + activity.streetAddress + " " + activity.tags).toLowerCase();
        let elemOutdoor = JSON.parse((activity.outdoor));
        let correctInOutdoor = ((elemOutdoor === false) && (showIndoor === true)) || ((elemOutdoor === true) && (showOutdoor === true));


        // only render ActivityCard  & map if it meets filter requirements
        if (firstLoad || ((correctInOutdoor) && (activityDetails.includes(searchQuery)))) {
            filteredActivities.push(activity);
        }
    });

    let array = [];
    for (let i = 0; i < filteredActivities.length; i++) {
        if (filteredActivities[i].latitude != null) {
            array.push(
                <Marker key={filteredActivities[i].name}
                    position={[
                        filteredActivities[i].latitude,
                        filteredActivities[i].longitude
                    ]}>
                    <Popup>
                        <div>
                            <h2>{filteredActivities[i].name}</h2>
                            <img src={filteredActivities[i].imgLink} style={{ width: "100%", height: "auto" }} alt={filteredActivities[i].name} />
                            <p>{filteredActivities[i].description}</p>
                            <p>{filteredActivities[i].streetAddress}</p>
                        </div>
                    </Popup>
                </Marker>
            )
        }
    }

    return (
        <div className="map">
            <MapContainer style={{ height: "50%", width: "auto", position: "sticky" }} center={[47.7511, -120.7401]} zoom={7}>
                <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    attribution='$copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>' />
                {array}
            </MapContainer>
        </div>
    );
}