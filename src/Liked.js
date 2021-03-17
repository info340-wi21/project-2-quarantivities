import React from 'react';
import { ActivityCard } from './Activity';
import firebase from 'firebase/app';

export function LikedPage(props) {
    let likedActivities = [""];

    const userRef = firebase.database().ref(props.currentUser.uid);

    userRef.on('value', function (snapshot) {
        snapshot.forEach(function (child) {
            let tempActivity = {
                activityID: child.val().activity,
                name: child.val().name,
                description: child.val().description,
                tags: child.val().tags,
                rating: child.val().rating,
                streetAddress: child.val().streetAddress,
                imgLink: child.val().imgLink,
                moreInfoLink: child.val().moreInfoLink
            }

            likedActivities.push(<ActivityCard key={tempActivity.activityID} activity={tempActivity} currentUser={props.currentUser} ></ActivityCard>);
        });
    });

    return (
        <div>
            <h1 style={{ fontSize: "25px" }}>Liked Activities</h1>
            {likedActivities}
        </div>
    );
}
