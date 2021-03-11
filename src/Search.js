import React from 'react';
import { useHistory } from 'react-router-dom';

export function Search(props) {

    let searchQuery = props.searchQuery;

    const history = useHistory();
    const onSubmit = e => {
        history.push(`?s=${searchQuery}`)
        e.preventDefault()
        props.setFirstLoad(false);
    }

    const onChangeIndoor = () => {
        props.setShowIndoor(!(props.showIndoor));
    }

    const onChangeOutdoor = () => {
        props.setShowOutdoor(!(props.showOutdoor));
    }

    let result = (
        <form action="/" method="get" className="form-inline" onSubmit={onSubmit}>
            <label for="keyword">Search & Filter Activities:</label>
            <input value={props.searchQuery} onInput={e => props.setSearchQuery(e.target.value)} name="s" type="text" className="form-control mb-2 ml-sm-2 mr-sm-4" id="keyword" placeholder="ex. trail, Kirkland, etc." />

            <div className="form-check mb-2 mr-sm-2">
                <input className="form-check-input" type="checkbox" id="outdoor" defaultChecked="true" onChange={onChangeOutdoor} />
                <label className="form-check-label" for="outdoor">outdoor</label>
            </div>

            <div className="form-check mb-2 mr-sm-4">
                <input className="form-check-input" type="checkbox" id="indoor" defaultChecked="true" onChange={onChangeIndoor} />
                <label className="form-check-label" for="indoor">indoor</label>
            </div>

            <button type="submit" id="submit" className="btn btn-info mb-2" >Search</button>

            <p className="activity-counter" id="activity-counter"></p>
        </form>
    );

    return (
        <div>
            {result}
        </div>
    );
}