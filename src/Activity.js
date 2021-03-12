import React from 'react';
import { useState } from 'react';

export function ActivityCard(props) {
    let activityID = props.activity.activityID;
    let name = props.activity.name;
    let description = props.activity.description;
    let tags = props.activity.tags;
    let rating = props.activity.rating;
    let streetAddress = props.activity.streetAddress;
    let imgLink = props.activity.imgLink;
    let moreInfoLink = props.activity.moreInfoLink;

    // More info button functionality
    const [moreInfo, setMoreInfo] = useState(false);
    const handleClick = () => {
        setMoreInfo(!moreInfo);
    }

    let infoButton;
    if (moreInfo) {
        infoButton = <div>
            <button onClick={handleClick} className="btn btn-dark" type="button">Less Info</button>
            <p></p>
            <p className="card-text">Location: {streetAddress}</p>
            <p className="card-text"><a href={moreInfoLink}>Link to more activity info</a></p>
        </div>
    } else {
        infoButton = <div>
            <button onClick={handleClick} className="btn btn-dark" type="button">More Info</button>
        </div>
    }

    // Like button functionality
    let setLikedArray = props.setLikedArray;
    let likedArray = props.likedArray;
    const [liked, setLiked] = useState(likedArray.includes(activityID));

    const handleLike = () => {
        let likedCopy = !liked;
        let likedArrayCopy = [];
        if(likedCopy) {
            likedArrayCopy = [...likedArray, activityID];
          } else if (!likedCopy) {
            likedArrayCopy = likedArray.filter(id => id!==activityID);
          }
        
        setLiked(likedCopy);
        setLikedArray(likedArrayCopy);
    }

    let likedButton;
    if (liked) {
        likedButton = <div>
            <button onClick={handleLike} className="btn" type="button"><img src="liked.png" alt="Like button"/></button>
        </div>
    } else {
        likedButton = <div>
            <button onClick={handleLike} className="btn" type="button"><img src="notLiked.png" alt="Unlike button"/></button>
        </div>
    }

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

                        {likedButton}  
                        <p></p>
                        {infoButton}                       
                    </div>
                </div>
            </div>
        </div>
    );
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
                    <ActivityCard activity={activity} key={activity.activityID} likedArray={props.likedArray} setLikedArray={props.setLikedArray}/>
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