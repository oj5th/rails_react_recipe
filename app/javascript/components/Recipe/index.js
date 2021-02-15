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
            this.props.recipes.map(user => (
              <li key={ user.id }>
                { user.id }
              </li>
            ))
          }
        </ul>
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
