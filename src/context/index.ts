import React from "react"
import formReducer from "./reducers/formReducer"
import drinksReducer from "./reducers/drinksReducer"
import drinkReducer from "./reducers/drinkReducer"

const Context: any = React.createContext(null)
export {
  Context,
  formReducer,
  drinksReducer,
  drinkReducer
}