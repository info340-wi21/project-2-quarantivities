import React from 'react';

// IN THE APP.JS APP COMPONENT:

// const [pets, setPets] = useState(props.pets);
//   function handleAdopt(nameStr) {
//     let petsCopy = pets.map((pet) => {
//       if(pet.name === nameStr) {
//         pet.adopted = true;
//       }  
//       return pet;
//     });
//     setPets(petsCopy);
//   } 


export function ActivityCard(props) {  
    // let displayedName = props.pet.name;
    // if(props.pet.adopted === true) {
    //   displayedName = props.pet.name + " (Adopted)";
    // }

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
  
export function ActivityList(props) {
    let allActivities = props.activities.map((activity) => {
      return (  
        <div>
            <ActivityCard activity={activity} key={activity.activityID}/>
        </div>
      )
    });

    return (
      <div>
          {allActivities}
      </div>
    );
  }