import React, { useEffect } from 'react';
import { useState } from 'react';
import firebase from 'firebase/app';
import { unstable_concurrentAct } from 'react-dom/test-utils';
import { Children } from 'react';
let array = []


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

    // let likedButton;
    const [liked, setLiked] = useState(likedArray.includes(activityID));
    const [activity, setActivity] = useState('');
    const [likedOrNot, setButton] = useState(false);

    // let likedRef = firebase.database().ref(props.currentUser.uid).child(props.activity.activityID).child('status')
    // let data;
    // let imgSrc;
    // likedRef.on('value', (snapshot) => {
    //     data = snapshot.val()
        
    // });
    // console.log(data);
    // if (data == null || !data) {
    //     setButton(false)
    // } else {
    //     setButton(true)
    // }
    // useEffect(() => {
    //     const likedRef = firebase.database().ref('liked')
    //     likedRef.on('value', (snapshot) => {
    //         const theValue = snapshot.val()
    //         console.log('value of msg changed' + theValue);
    //         setActivity(theValue)
    //     })
    // }, [])

    //when liked button is pressed
    // const updateLike = (event) => {
    //     setLiked(event.target.value);
    //     // let likedCopy = !liked;
    //     // let likedArrayCopy = [];
    //     // if(likedCopy) {
    //     //     likedArrayCopy = [...likedArray, activityID];
    //     //   } else if (!likedCopy) {
    //     //     likedArrayCopy = likedArray.filter(id => id!==activityID);
    //     //   }

    //     // setLiked(likedCopy);
    //     // setLikedArray(likedArrayCopy);
    // }
    // upload to database
    let likedImgSrc = ''
    let curr = false
    const userRef = firebase.database().ref(props.currentUser.uid)

    const newUserObj = {
        activity: props.activity.activityID
    }
    const childRef = userRef.child(newUserObj.activity)
    const postLike = (event) => {
        event.preventDefault();


        // let likedButtonPressed = false
        // const newUserObj = {
        //     activity: props.activity.activityID,
        // }
        // ref to database
        // const userRef = firebase.database().ref(props.currentUser.uid)
        // const childRef = userRef.child(newUserObj.activity)
        childRef.on('value', function (snapshot) {
            snapshot.forEach(function (child) {
                if (child.node_.value_ == true) {
                    curr = true
                }
            });
        });
        // userRef.on('value', function (snapshot) {
        //     snapshot.forEach(function (child) {
        //         console.log(child)
        //         if (child.node_.value_ == newUserObj.activity) {
        //             curr = true
        //             // likedButtonPressed = true
        //         }
        //     });
        // });
        if (curr) {
            // userRef.child(newUserObj.activity).remove()
            childRef.child('status').set(false)
            // childRef.child('status').remove()
            // userRef.child(newUserObj.status).remove()
            // childRef.child('status').set(-1);
            // childRef.child('liked').remove();
            curr = false
            setButton(false)
            // likedImgSrc = "\"notLiked.png\""
            // let likedCopy = false;
            // setLiked(likedCopy)
            // setArray = setArray.filter(id => id!==newUserObj.activity);

            //array.remove(newUserObj.activity)
            // let copyLiked = false
            // setLiked(copyLiked)
        } else {
            userRef.child(newUserObj.activity).set(newUserObj.activity)
            childRef.child('status').set(true)
            setButton(true)
            // childRef.child('status').update(true)
            //childRef.child('status').set(true)
            // console.log(childRef.child('status'))
            // userRef.child(newUserObj.status).set(1)
            // childRef.child('liked').set(true);
            // likedImgSrc = "\"liked.png\""
            //childRef.child('status').remove();
            // let likedCopy = true
            // let copyLiked = true
            // setLiked(copyLiked);
            // setArray = [...setArray, newUserObj.activity];
            // setArray.push(newUserObj.activity)

        }
        // userRef.child('array').set(setArray)
        // if (userRef.child(newUserObj.activity) == true) {
        //     setLiked(false)
        // } else {
        //     setLiked(true)
        // }
    }

    // let likedButton = userRef.on('value', function(snapshot) {
    //     snapshot.forEach(function(child) {
    //         if (child.node_.value_ == null) {
    //             return <div>
    //                 <button onClick={postLike} className="btn" type="button"><img src="liked.png" alt="Like button"/></button>
    //             </div>
    //         } else {
    //             return <div>
    //                 <button onClick={postLike} className="btn" type="button"><img src="notLiked.png" alt="Unlike button"/></button>
    //             </div>;
    //         }
    //     });
    // });
    // let likedButton;
    // likedButton = <div>
    //         <button onClick={postLike} className="btn" type="button"><img src={likedImgSrc} alt="Like button"/></button>
    //     </div>
    let likedButton;
    let likedStatus;
    // let query = childRef.where(childRef.key, "array-contains", activityID)
    // childRef.on('value', function (snapshot) {
    //     snapshot.forEach(function (child) {
    //         if (child.node_.value_ === true) {
    //             likedStatus = true
    //         } else {
    //             likedStatus = false
    //         }
    //         console.log(likedStatus)
    //     });
    // });


    // console.log(query.get())
    //console.log(childRef.child('status').getValue())
    // console.log(props.activity)
    // console.log(userRef.child(newUserObj.activity))
    // console.log(newUserObj.activity)
    // if (childRef.child('liked').path.pieces_[2] == 1) {

    //     likedButton = <div>
    //         <button onClick={postLike} className="btn" type="button"><img src="liked.png" alt="Unlike button" /></button>
    //     </div>
    // } else {
    // let likedButton = <div>
    //     <button onClick={postLike} className="btn" type="button"><img src="notLiked.png" alt="Like button" /></button>
    // </div>
    
    let likedRef = childRef.child('status')
    let data;
    let imgSrc;
    likedButton = <div>
        <button onClick={postLike} className="btn" type="button"><img src="notLiked.png" alt="Like button" /></button>
    </div>
    likedRef.on('value', (snapshot) => {
        data = snapshot.val()
        
    });
    //This handles the onClick change when the the button is liked or not.
    if (likedOrNot) {
        likedButton = <div>
             <button onClick={postLike} className="btn" type="button"><img src="liked.png" alt="Like button" /></button>
         </div>
    } else {
        likedButton = <div>
             <button onClick={postLike} className="btn" type="button"><img src="notLiked.png" alt="Like button" /></button>
         </div>
    }
    
    //This is supposed handle the intital liked posts. However, due to asynchronous calls there is a delay between the data download and the rendering process.
    // So when you save this file, the hearts' colors will change accordingly but when you refresh on the actual website, the color resets back to default.
    if (data == null || !data) {
        likedButton = <div>
            <button onClick={postLike} className="btn" type="button"><img src="notLiked.png" alt="Like button" /></button>
        </div>
        imgSrc = "notLiked.png"
    } else {
        likedButton = <div>
            <button onClick={postLike} className="btn" type="button"><img src="liked.png" alt="Like button" /></button>
        </div>
        imgSrc = "liked.png"
    }
    // console.log(imgSrc)

    // childRef.on("value", (snapshot) => {
    //     likedButton = <div>
    //         <button onClick={postLike} className="btn" type="button"><img src="liked.png" alt="Like button" /></button>
    //     </div>
    //     let data = snapshot.val()
    //     if (!data || data === null) {
    //         likedButton = <div>
    //         <button onClick={postLike} className="btn" type="button"><img src="notLiked.png" alt="Like button" /></button>
    //     </div>
    //     } else {
    //         likedButton = <div>
    //         <button onClick={postLike} className="btn" type="button"><img src="liked.png" alt="Like button" /></button>
    //     </div>
    //     }
    //     // console.log('added')
    //     // //console.log(childRef)
    //     // likedStatus = true
    // });
    // childRef.on("child_changed", () => {
    //     likedButton = <div>
    //         <button onClick={postLike} className="btn" type="button"><img src="notLiked.png" alt="Like button" /></button>
    //     </div>
    //     console.log('removed')
    //     likedStatus = false
    // });

    // if (likedStatus) {
    //     likedButton = <div>
    //         <button onClick={postLike} className="btn" type="button"><img src="liked.png" alt="Like button"/></button>
    //     </div>
    // } else {
    //     likedButton = <div>
    //         <button onClick={postLike} className="btn" type="button"><img src="notLiked.png" alt="Unlike button"/></button>
    //     </div>
    // }
    // let test =  userRef.child(activityID + "/liked")


    // test.on('value', function (snapshot) {
    //     if (snapshot.val() === true) {
    //         console.log("hello")
    //         likedButton = <div>
    //             <button onClick={postLike} className="btn" type="button"><img src="liked.png" alt="Like button" /></button>
    //         </div>


    //         // likedButtonPressed = true
    //     } else {
    //         console.log("bye")
    //         likedButton = <div>
    //             <button onClick={postLike} className="btn" type="button"><img src="notLiked.png" alt="Unlike button" /></button>
    //         </div>
    //     } 
    // })
    // console.log(childRef.getValue(child('liked').path.pieces_[2]))

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
    // const userRef = firebase.database().ref(props.currentUser.uid)
    // create variables from props to assist filter
    let searchQuery = props.searchQuery;
    let firstLoad = props.firstLoad;
    let showOutdoor = props.showOutdoor;
    let showIndoor = props.showIndoor;

    let allActivities = props.activities.map((activity) => {


        // const newUserObj = {
        //     activity: props.activities.activityID
        // }
        // const childRef = userRef.child(activity)

        let activityDetails = (activity.name + " " + activity.description + " " + activity.streetAddress + " " + activity.tags).toLowerCase();
        let elemOutdoor = JSON.parse((activity.outdoor));
        let correctInOutdoor = ((elemOutdoor === false) && (showIndoor === true)) || ((elemOutdoor === true) && (showOutdoor === true));
        // userRef.child(activity).set(activity)

        // only render ActivityCard  & map if it meets filter requirements
        if (firstLoad || ((correctInOutdoor) && (activityDetails.includes(searchQuery)))) {

            //? relevantActivities.push(activity);
            return (
                <div>
                    <ActivityCard activity={activity} key={activity.activityID} likedArray={props.likedArray} setLikedArray={props.setLikedArray} currentUser={props.currentUser} />
                </div>
            );
        } else {
            return '';
        }
    });
    console.log(array)
    return (
        <div>
            {allActivities}
        </div>
    );
}