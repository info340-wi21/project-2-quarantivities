import React, { useEffect } from 'react';
import { useState } from 'react';
import firebase from 'firebase/app';
import { Children } from 'react';

export function ActivityCard(props) {

    // creating variables for activity info from props
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
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        const userRef = firebase.database().ref(props.currentUser.uid)

        const newUserObj = {
            activity: props.activity.activityID
        }
        const childRef = userRef.child(newUserObj.activity);

        userRef.on('value', function (snapshot) {
            snapshot.forEach(function (child) {
                if (child.node_.value_ == newUserObj.activity)
                // console.log(child.node_.value_)
                // setLiked(child.node_.value_);
                setLiked(true);
            });
        });
        
        return () => childRef.off('value');
    }, [])

    const postLike = (event) => {
        event.preventDefault();

        const userRef = firebase.database().ref(props.currentUser.uid);

        const newUserObj = {
            activity: props.activity.activityID
        }
        const childRef = userRef.child(newUserObj.activity);

        if (liked) {
            userRef.child(newUserObj.activity).remove()
            // childRef.child('status').set(false)
            // userRef.child(props.currentUser.uid).set(newUserObj.activity);
            // userRef.child(childRef).remove();
        } else {
            userRef.child(newUserObj.activity).set(newUserObj.activity)
            // userRef.push(newUserObj.activity);
            // userRef.child(newUserObj.activity).set(newUserObj.activity)
            // childRef.child('status').set(true)
        }
        // location.reload(true);
    }

    let likedButton;

    if (liked === undefined || !liked) {
        likedButton = <div>
            <button onClick={postLike} className="btn" type="button"><img src="notLiked.png" alt="Like button" /></button>
        </div>
    } else {
        likedButton = <div>
            <button onClick={postLike} className="btn" type="button"><img src="liked.png" alt="Like button" /></button>
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
    console.log(props.activities)
    let allActivities = props.activities.map((activity) => {

        let activityDetails = (activity.name + " " + activity.description + " " + activity.streetAddress + " " + activity.tags).toLowerCase();
        let elemOutdoor = JSON.parse((activity.outdoor));
        let correctInOutdoor = ((elemOutdoor === false) && (showIndoor === true)) || ((elemOutdoor === true) && (showOutdoor === true));

        // only render ActivityCard  & map if it meets filter requirements
        if (firstLoad || ((correctInOutdoor) && (activityDetails.includes(searchQuery)))) {

            return (
                <div key={activity.activityID} >
                    <ActivityCard activity={activity} currentUser={props.currentUser} />
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