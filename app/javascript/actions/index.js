import axios from "axios";

const GET_RECIPE_LIST = 'GET_RECIPE_LIST';

export function getRecipeList(json) {
  console.log('getRecipeList() Action!!')
  console.log(json)
  return {
    type: GET_RECIPE_LIST,
    json
  }
}

export const ALL_RECIPES = () => {
  return (dispatch) => {
    axios
      .get("/api/v1/recipes/index")
      .then(function (response) {
        dispatch(getRecipeList(response.data))
      })
      .catch(function (error) {
        console.log(error)
      });
  }
}
