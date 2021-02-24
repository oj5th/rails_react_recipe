const initialReducer = (state = [], action) => {
  console.log("ACTION ON REDUCER START")
  console.log(action.type);
  console.log("ACTION ON REDUCER END")
  switch (action.type) {
    case "GET_RECIPES_SUCCESS":
      return { recipes: action.json }
    default:
      return { 
        recipes: [
          {
            id: 1,
            name: "test",
            guid: "123"
          }
        ]
      }
  }
}

export default initialReducer;