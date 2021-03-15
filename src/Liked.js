import React, { useState, useEffect } from 'react';
import { ActivityList } from './Activity';
import firebase from 'firebase/app';

export function LikedPage(props) {
    //let likedActivities = [];
    //let activities = props.activities;
    let likedArray = props.likedArray;
    const [liked, setLiked] = useState([]);

    let firstLoad = true;
    let searchQuery = "";
    let showOutdoor = true;
    let showIndoor = true;

    // activities.forEach(activity => {
    //     likedArray.forEach(liked => {
    //         if(activity.activityID === liked) {
    //             likedActivities.push(activity);
    //         }
    //     })
    // });

    // let firstLoad = true;
    // let searchQuery = "";
    // let showOutdoor = true;
    // let showIndoor = true;

    useEffect(() => {
        const likedRef = firebase.database().ref('liked')
        likedRef.on('value', (snapshot) => {
            const theLikesObj = snapshot.val();
            let objectKeyArray = Object.keys(theLikesObj)
            let theLikedArray = objectKeyArray.map((key) => {
                let singleLikedObj = theLikesObj[key]
                singleLikedObj.key = key
                return singleLikedObj;
            })
            setLiked(theLikedArray);
        })
    }, [])

    if(liked.length == 0) return null;

    let likedActivities = liked.map((likedObj) => {
        return <LikedActivities key={likedObj.key} liked={likedObj} currentUser={props.currentUser} />
    })

    return (
        <div>
            <main>
                <h1>Liked Activities</h1>
                {likedActivities}
                <ActivityList activities={liked} firstLoad={firstLoad} searchQuery={searchQuery} showOutdoor={showOutdoor} showIndoor={showIndoor} likedArray={props.likedArray} setLikedArray={props.setLikedArray}/>
            </main>
        </div>
    );
}

export function LikedActivities(props) {
    const likeActivity = () => {

    }
    let firstLoad = true;
    let searchQuery = "";
    let showOutdoor = true;
    let showIndoor = true;
    let activity = props.liked;

    return (
        <div>
            <main>
                <h1>Liked Activities</h1>
                <ActivityList activities={activity} firstLoad={firstLoad} searchQuery={searchQuery} showOutdoor={showOutdoor} showIndoor={showIndoor} likedArray={props.likedArray} setLikedArray={props.setLikedArray}/>
            </main>
        </div>
    );
}
