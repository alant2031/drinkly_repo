import React from "react"
import formReducer from "./reducers/formReducer"
import drinksReducer from "./reducers/drinksReducer"

const Context: any = React.createContext(null)
export {
  Context,
  formReducer,
  drinksReducer,
}