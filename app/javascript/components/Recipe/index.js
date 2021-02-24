import React from "react"
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const GET_RECIPES_REQUEST = 'GET_RECIPES_REQUEST';
const GET_RECIPES_SUCCESS = 'GET_RECIPES_SUCCESS';

function ALL_RECIPES() {
  console.log('ALL_RECIPES() Action!!')
  return dispatch => {
    dispatch({ type: GET_RECIPES_REQUEST });
    return fetch(`/api/v1/recipes/index`)
    .then(response => response.json())
    .then(json => dispatch(getRecipesSuccess(json)))
    .catch(error => console.log(error));
  }
}

export function getRecipesSuccess(json) {
  console.log('getRecipesSuccess() Action!!')
  console.log(json)
  return {
    type: GET_RECIPES_SUCCESS,
    json
  }
}

class Recipe extends React.Component {
  render () {
    const { recipes } = this.props.recipes;
    const recipesList = recipes.map((recipe) => {
      return <li key={recipe.id}>{recipe.id} {recipe.name}</li>
    })

    return (
      <React.Fragment>
        <br/>
        <br/>
        <br/>
        <br/>
        <button className="getRecipesBtn" onClick={() => this.props.ALL_RECIPES()}>RECIPES</button>
        <br/>
        <ul>{ recipesList }</ul>
      </React.Fragment>
    );
  }
}

const structuredSelector = createStructuredSelector({
  recipes: state => state.recipes,
})

const mapDispatchToProps = { ALL_RECIPES };

export default connect(structuredSelector, mapDispatchToProps)(Recipe);
