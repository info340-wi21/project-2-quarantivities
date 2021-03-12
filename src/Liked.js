import React from 'react';
import { ActivityList } from './Activity';

export function LikedPage(props) {
    let likedActivities = [];
    let activities = props.activities;
    let likedArray = props.likedArray;

    activities.forEach(activity => {
        likedArray.forEach(liked => {
            if(activity.activityID === liked) {
                likedActivities.push(activity);
            }
        })
    });

    let firstLoad = true;
    let searchQuery = "";
    let showOutdoor = true;
    let showIndoor = true;

    return (
        <div>
            <main>
                <h1>Liked Activities</h1>
                <ActivityList activities={likedActivities} firstLoad={firstLoad} searchQuery={searchQuery} showOutdoor={showOutdoor} showIndoor={showIndoor} likedArray={props.likedArray} setLikedArray={props.setLikedArray}/>
            </main>
        </div>
    );
}
