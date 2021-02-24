import React from "react"
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ALL_RECIPES } from '../../actions';

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
