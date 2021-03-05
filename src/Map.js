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
function MakeMap(props) { // props would be activityObj
    let array = [];
    for (let i = 0; i < props.activities.length; i++) {
        if (props.activities[i].latitude != null) {
            array.push(
                <Marker key={props.activities[i].name}
                    position={[
                        props.activities[i].latitude,
                        props.activities[i].longitude
                    ]}>
                    <Popup>
                        <div>
                            <h2>{props.activities[i].name}</h2>
                            <img src={props.activities[i].imgLink} style={{ width: "100%", height:"auto" }}alt={props.activities[i].name} />
                            <p>{props.activities[i].description}</p>
                            <p>{props.activities[i].streetAddress}</p>
                        </div>
                    </Popup>
                </Marker>
            )
        }
    }
    return (
        <div className="map">
            <MapContainer style={{ height: "800px", width: "800px"}} center={[47.7511, -120.7401]} zoom={7}>
                <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    attribution='$copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>' />
                    {array}
            </MapContainer>
        </div>
    );
}

export default MakeMap;
export {MakeMap};