const GET_RECIPES_REQUEST = 'GET_RECIPES_REQUEST';
const GET_RECIPES_SUCCESS = 'GET_RECIPES_SUCCESS';

export const ALL_RECIPES = () => {
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
