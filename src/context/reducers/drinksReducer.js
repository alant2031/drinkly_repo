export default function reducer(state, action) {
  switch (action.type) {
    case "listByCategory":
      return {
        ...state,
        list: action.payload
      }
    case "listByName":
      return {
        ...state,
        list: action.payload
      }
    default:
      return state
  }
}