export default function reducer(state, action) {
  switch (action.type) {
    case "listByCategory":
      return {
        ...state,
        drinks: action.payload
      }

    default:
      return state
  }
}