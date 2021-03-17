import React, { useState, useEffect } from 'react';
import { ActivityList } from './Activity';
import firebase from 'firebase/app';


export function LikedPage(props) {
    let activities = props.activities;

    let likedIds = props.likedIds;
    let setLikedIds = props.setLikedIds;

    let firstLoad = true;
    let searchQuery = "";
    let showOutdoor = true;
    let showIndoor = true;



    // useEffect(() => {
    //     const userRef = firebase.database().ref(props.currentUser.uid);

    //     activities.forEach(activity => {
    //         const childRef = userRef.child(activity.activityID);
    //         userRef.on('value', function (snapshot) {
    //             snapshot.forEach(function(child) {
    //                 // console.log("child node: " + child.node_.value_)
    //                 if(child.node_.value_ == activity.activityID) {
    //                     // setLikedIds(likedIds.filter(id => id!==activity.activityID))
    //                     // setLikedIds([...likedIds, snapshot.key]);
    //                     likedActivities.push(activity)
    //                 }

    //                 // } else if(child.node_.value_ && !likedIds.includes(snapshot.key)) {
    //                 //     setLikedIds([...likedIds, snapshot.key]);
    //                 // }
    //             })
    //             // console.log(snapshot.val())
    //         })
    //         console.log(likedActivities)
    //     });
    // }, [])
    


    // activities.forEach(activity => {
    //     likedIds.forEach(id => {
    //         if(activity.activityID === id) {
    //             likedActivities.push(activity);
    //         }
    //     })
    // });
    console.log(props.likedActivities)
    return (
        <div>
            <main>
                <h1>Liked Activities</h1>
                <ActivityList activities={props.likedActivities} firstLoad={firstLoad} searchQuery={searchQuery} showOutdoor={showOutdoor} showIndoor={showIndoor} likedArray={props.likedArray} setLikedArray={props.setLikedArray} currentUser={props.currentUser} />

            </main>
        </div>
    );
}
