import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { ALL_RECIPES } from '../../actions';

class Recipe extends Component {
  render() {
    return (
      <div>
        Recipes Module
        <ul>
          {
            this.props.recipes.map(recipe => (
              <li key={ recipe.id }>
                { recipe.id }
              </li>
            ))
          }
        </ul>
        <button onClick={() => this.props.ALL_RECIPES()}>Show Recipe</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes
  }
}

const mapDispatchToProps = () => {
  return {
    ALL_RECIPES
  }
}

export default connect(mapStateToProps, mapDispatchToProps())(Recipe);
