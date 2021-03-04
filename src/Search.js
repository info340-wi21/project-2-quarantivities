import React from 'react';

export function Search(props) {
    
    let result = (
        <form className="form-inline">
        <label for="keyword">Search</label>
        <input type="text" className="form-control mb-2 ml-sm-2 mr-sm-4" id="keyword" placeholder="ex. trail, Kirkland, etc." />

        <div className="form-check mb-2 mr-sm-2">
          <input className="form-check-input" type="checkbox" id="outdoor" checked="true" />
          <label className="form-check-label" for="outdoor">outdoor</label>
        </div>

        <div className="form-check mb-2 mr-sm-4">
          <input className="form-check-input" type="checkbox" id="indoor" checked="true" />
          <label className="form-check-label" for="indoor">indoor</label>
        </div>

        <button type="submit" id="submit" className="btn btn-info mb-2" onClick={submitForm}>Submit</button>

        <p className="activity-counter" id="activity-counter"></p>
      </form>
    );

    return (
        <div>
            {result}
        </div>
    );
}

function submitForm(props) { // props will be state?
    // todo: add form submission functionality, save value of checkboxes/search query

    // -- copied code from project 1 index.js 
    // state.firstLoad = false;
    // state.search = (document.querySelector('#keyword').value).toLowerCase();
    // state.showOutdoor = document.querySelector("#outdoor").checked;
    // state.showIndoor = document.querySelector("#indoor").checked;
    // renderAllActivities(state.currentData);

    let state = {
        firstLoad = false,
        search = (document.querySelector('#keyword').value).toLowerCase(),
        showOutdoor = document.querySelector("#outdoor").checked,
        showIndoor = document.querySelector("#indoor").checked
    };

    // render new ActivityList based on state data filters?

}