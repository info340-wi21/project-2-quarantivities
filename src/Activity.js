import React from 'react';
import { useState } from 'react';

export function ActivityCard(props) {
    let name = props.activity.name;
    let description = props.activity.description;
    let tags = props.activity.tags;
    let rating = props.activity.rating;
    let streetAddress = props.activity.streetAddress;
    let imgLink = props.activity.imgLink;
    let moreInfoLink = props.activity.moreInfoLink;

    const [moreInfo, setMoreInfo] = useState(false);

    const handleClick = () => {
        setMoreInfo(!moreInfo);
    }

    if (moreInfo) {
        return (
            <div className="container card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-auto">
                            <img className="pb-3 activity-img" src={imgLink} alt={name} />
                        </div>

                        <div className="col-sm">
                            <h2 className="card-title">{name}</h2>
                            <p className="card-text">{description}</p>
                            <p className="card-text">Tags: {tags}</p>
                            <p className="card-text">Rating: {rating}/5</p>

                            <button onClick={handleClick} className="btn btn-dark" type="button">Less Info</button>
                            <p></p>
                            <p className="card-text">Location: {streetAddress}</p>
                            <p className="card-text"><a href={moreInfoLink}>Link to more activity info</a></p>
                        </div>
                    </div>
                </div>
            </div>
        );

    } else {
        return (
            <div className="container card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-auto">
                            <img className="pb-3 activity-img" src={imgLink} alt={name} />
                        </div>

                        <div className="col-sm">
                            <h2 className="card-title">{name}</h2>
                            <p className="card-text">{description}</p>
                            <p className="card-text">Tags: {tags}</p>
                            <p className="card-text">Rating: {rating}/5</p>

                            <button onClick={handleClick} className="btn btn-dark" type="button">More Info</button>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

export function ActivityList(props) {

    // create variables from props to assist filter
    let searchQuery = props.searchQuery;
    let firstLoad = props.firstLoad;
    let showOutdoor = props.showOutdoor;
    let showIndoor = props.showIndoor;

    let allActivities = props.activities.map((activity) => {

        let activityDetails = (activity.name + " " + activity.description + " " + activity.streetAddress + " " + activity.tags).toLowerCase();
        let elemOutdoor = JSON.parse((activity.outdoor));
        let correctInOutdoor = ((elemOutdoor === false) && (showIndoor === true)) || ((elemOutdoor === true) && (showOutdoor === true));


        // only render ActivityCard  & map if it meets filter requirements
        if (firstLoad || ((correctInOutdoor) && (activityDetails.includes(searchQuery)))) {

            //? relevantActivities.push(activity);
            return (
                <div>
                    <ActivityCard activity={activity} key={activity.activityID} moreInfo={props.moreInfo} setMoreInfo={props.setMoreInfo} />
                </div>
            );
        } else {
            return '';
        }
    });

    return (
        <div>
            {allActivities}
        </div>
    );
}