import React, { useState, useEffect } from 'react';
import { ActivityList } from './Activity';
import firebase from 'firebase/app';

export function LikedPage(props) {
    //let likedActivities = [];
    //let activities = props.activities;
    //let likedArray = props.likedArray;
    const [likedArray, setLikedArray] = useState([]);


    //const [curr, setCurr] = useState(false);

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

    // useEffect(() => {
    //     const likedRef = firebase.database().ref('liked')
    //     likedRef.on('value', (snapshot) => {
    //         const theLikesObj = snapshot.val();
    //         let objectKeyArray = Object.keys(theLikesObj)
    //         let theLikedArray = objectKeyArray.map((key) => {
    //             let singleLikedObj = theLikesObj[key]
    //             singleLikedObj.key = key
    //             return singleLikedObj;
    //         })
    //         setLiked(theLikedArray);
    //     })
    // }, [])


    
    useEffect(() => {
        const userRef = firebase.database().ref(props.currentUser.uid)

        const newUserObj = {
            activity: props.activity.activityID
        }
        //const currActivity = props.activity;

        const childRef = userRef.child(newUserObj.activity);

        childRef.on('value', function (snapshot) {
            snapshot.forEach(function (child) {

                let liked = child.node_.value_;
                //let activityName = newUserObj.activity;

                if (liked !== undefined && liked !== false) {
                    let currActivity = '';
                    setLikedArray([...likedArray, currActivity]) // need to set currActivity
                }
            });
        });
    }, [])

    const likedList = likedArray.map((item) => {
        return (
             <ListItem />
        );
    });    


    if (likedArray.length === 0) {
        return null;
    }

    // let likedActivities = likedArray.map((likedObj) => {
    //     return <LikedActivities key={likedObj.key} liked={likedObj} currentUser={props.currentUser} />
    // })

    return (
        <div>
            <main>
                <h1>Liked Activities</h1>
                {likedActivities}
                <ActivityList activities={likedArray} firstLoad={firstLoad} searchQuery={searchQuery} showOutdoor={showOutdoor} showIndoor={showIndoor} likedArray={props.likedArray} setLikedArray={props.setLikedArray} />
            </main>
        </div>
    );
}

export function LikedActivities(props) {
    // const likeActivity = () => {

    // }
    let firstLoad = true;
    let searchQuery = "";
    let showOutdoor = true;
    let showIndoor = true;
    let activity = props.liked;

    return (
        <div>
            <main>
                <h1>Liked Activities</h1>
                <ActivityList activities={activity} firstLoad={firstLoad} searchQuery={searchQuery} showOutdoor={showOutdoor} showIndoor={showIndoor} likedArray={props.likedArray} setLikedArray={props.setLikedArray} />
            </main>
        </div>
    );
}