export default function reducer(state, action) {

  switch (action.type) {
    case 'initCategories':
      return {
        ...state,
        categories: action.payload  ,
        another: "testing"
      }
    default:
      return state;
  }

}