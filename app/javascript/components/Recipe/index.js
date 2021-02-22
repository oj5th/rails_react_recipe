import React from "react"
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const GET_THINGS_REQUEST = 'GET_THINGS_REQUEST';
const GET_THINGS_SUCCESS = 'GET_THINGS_SUCCESS';

function ALL_RECIPES() {
  console.log('getThings() Action!!')
  return dispatch => {
    dispatch({ type: GET_THINGS_REQUEST });
    return fetch(`/api/v1/recipes/index`)
    .then(response => response.json())
    .then(json => dispatch(getThingsSuccess(json)))
    .catch(error => console.log(error));
  }
}

export function getThingsSuccess(json) {
  console.log('getThingsSuccess() Action!!')
  console.log(json)
  return {
    type: GET_THINGS_SUCCESS,
    json
  }
}

class Recipe extends React.Component {
  render () {
    const { things } = this.props.things;
    const thingsList = things.map((thing) => {
      return <li key={thing.id}>{thing.id} {thing.name}</li>
    })

    return (
      <React.Fragment>
        <br/>
        <br/>
        <br/>
        <br/>
        <button className="getThingsBtn" onClick={() => this.props.ALL_RECIPES()}>RECIPES</button>
        <br/>
        <ul>{ thingsList }</ul>
      </React.Fragment>
    );
  }
}

const structuredSelector = createStructuredSelector({
  things: state => state.things,
})

const mapDispatchToProps = { ALL_RECIPES };

export default connect(structuredSelector, mapDispatchToProps)(Recipe);
