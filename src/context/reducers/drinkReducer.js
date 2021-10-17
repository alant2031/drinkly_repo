export default function reducer(state, action) {
  switch (action.type) {
    case "listDetails":
      return {
        ...state,
        item: action.payload
      }
    default:
      return state
  }
}