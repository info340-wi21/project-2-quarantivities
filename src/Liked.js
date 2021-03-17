import React, { useState, useEffect } from 'react';
import { ActivityCard, ActivityList } from './Activity';
import firebase from 'firebase/app';


export function LikedPage(props) {
    let activities = props.activities;

    let likedIds = props.likedIds;
    let setLikedIds = props.setLikedIds;

    let firstLoad = true;
    let searchQuery = "";
    let showOutdoor = true;
    let showIndoor = true;

    let likedActivities = ["testvalue"];

    

    const userRef = firebase.database().ref(props.currentUser.uid);

    // let name = props.activity.name;
    // let description = props.activity.description;
    // let tags = props.activity.tags;
    // let rating = props.activity.rating;
    // let streetAddress = props.activity.streetAddress;
    // let imgLink = props.activity.imgLink;
    // let moreInfoLink = props.activity.moreInfoLink;

    // activityID={child.val().activity} name={child.val().name} description={child.val().description} tags={child.val().tags} rating={child.val().rating} streetAddress={child.val().streetAddress} imgLink={child.val().imgLink} moreInfoLink={child.val().moreInfoLink}

    

    userRef.on('value', function (snapshot) {
        snapshot.forEach(function (child) {
            console.log(child.val().activity);
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

            console.log("temp" + tempActivity);

            likedActivities.push(<ActivityCard key={tempActivity.activityID} activity={tempActivity} currentUser={props.currentUser} ></ActivityCard>);
            
            // if (child.val().activity == newUserObj.activity)
            //     // console.log(child.node_.value_)
            //     // setLiked(child.node_.value_);
            //     setLiked(true);
        });
    });

 

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

    return (
        <div>
            {likedActivities}
            {console.log(likedActivities)}
            {/* <main>
                <h1>Liked Activities</h1>
                <ActivityList activities={props.likedActivities} firstLoad={firstLoad} searchQuery={searchQuery} showOutdoor={showOutdoor} showIndoor={showIndoor} likedArray={props.likedArray} setLikedArray={props.setLikedArray} currentUser={props.currentUser} />

            </main> */}
        </div>
    );
}
