const initialReducer = (state = [], action) => {
  console.log("ACTION ON REDUCER START")
  console.log(action.type);
  console.log("ACTION ON REDUCER END")
  switch (action.type) {
    case "GET_THINGS_SUCCESS":
      return { things: action.json }
    default:
      return { 
        things: [
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