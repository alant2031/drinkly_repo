import formReducer from './formReducer'

export default function rootReducer(state, action) {
  return {
    ...formReducer(state, action)
  }
}