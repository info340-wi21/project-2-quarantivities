import React from 'react';

export function ActivityCard(props) {

    let activityID = props.activity.activityID;
    let name = props.activity.name;
    let description = props.activity.description;
    let tags = props.activity.tags;
    let rating = props.activity.rating;
    let streetAddress = props.activity.streetAddress;
    let imgLink = props.activity.imgLink;
    let moreInfoLink = props.activity.moreInfoLink;

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

                        <button className="btn btn-dark" type="button" data-toggle="modal" data-target={`#${activityID}`}>More Info</button>

                        <div className="modal" id={`${activityID}Modal`} tabindex="-1" role="dialog" aria-labelledby={`${activityID}ModalLabel`} aria-hidden="true">
                            <div className="model-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h3 className="modal-title" id={`${activityID}ModalLabel`}>{name}</h3>
                                        <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <p>{streetAddress}</p>
                                        <p><a href={moreInfoLink}>Link to more activity info</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function ActivityList(props) { // pass state in as a prop: searchQuery, indoor/outdoor
    let allActivities = props.activities.map((activity) => {

        // create variables from props to assist filter
        let searchQuery = props.searchQuery;
        let firstLoad = props.firstLoad;
        let showOutdoor = props.showOutdoor;
        let showIndoor = props.showIndoor;

        let activityDetails = (activity.name + " " + activity.description + " " + activity.streetAddress + " " + activity.tags).toLowerCase();
        let elemOutdoor = JSON.parse((activity.outdoor));
        let correctInOutdoor = ((elemOutdoor === false) && (showIndoor === true)) || ((elemOutdoor === true) && (showOutdoor === true));


        // only render ActivityCard  & map if it meets filter requirements
        if (firstLoad || ((correctInOutdoor) && (activityDetails.includes(searchQuery)))) {
            return (
                <div>
                    <ActivityCard activity={activity} key={activity.activityID} />
                    {/* todo: RENDER MAP POINT HERE? */}
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