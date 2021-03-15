import React, { useState, useEffect } from 'react';
import { ActivityList } from './Activity';
import firebase from 'firebase/app';

export function LikedPage(props) {
    let likedActivities = [];
    let activities = props.activities;
    
    let likedIds = props.likedIds;
    let setLikedIds = props.setLikedIds;

    let firstLoad = true;
    let searchQuery = "";
    let showOutdoor = true;
    let showIndoor = true;

    useEffect(() => {
        const userRef = firebase.database().ref(props.currentUser.uid);
        activities.forEach(activity => {
            const childRef = userRef.child(activity.activityID);
            childRef.on('value', function (snapshot) {
                snapshot.forEach(function(child) {
                    if(!child.node_.value_) {
                        setLikedIds(likedIds.filter(id => id!==activity.activityID))
                    } else if(child.node_.value_ && !likedIds.includes(snapshot.key)) {
                        setLikedIds([...likedIds, snapshot.key]);
                    }
                })
            })
        });

    }, [])

    console.log(likedIds);

    activities.forEach(activity => {
        likedIds.forEach(id => {
            if(activity.activityID === id) {
                likedActivities.push(activity);
            }
        })
    });

    return (
        <div>
            <main>
                <h1>Liked Activities</h1>
                <ActivityList activities={likedActivities} firstLoad={firstLoad} searchQuery={searchQuery} showOutdoor={showOutdoor} showIndoor={showIndoor} likedArray={props.likedArray} setLikedArray={props.setLikedArray} currentUser={props.currentUser}/>
                    
            </main>
        </div>
    );
}
