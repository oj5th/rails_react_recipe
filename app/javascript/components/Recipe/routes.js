import Recipe from './index'

export default {
  routeProps: { // This gets passed straight to react-router
    path: '/recipes', // Where the module lives in the nav hierarchy
    component: Recipe, // The actual component itself
  },
  name: 'Recipe', // The name of the module
}
