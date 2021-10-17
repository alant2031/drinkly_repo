import React from "react"
import formReducer from "./reducers/formReducer"
import drinksReducer from "./reducers/drinksReducer"

const initialForm: any = {

  categories: [],
  match: null,

}

const initialDrinks: any = {
  list: []
}

const initialDrink: any = {
  item: {},
  isFavorite: false
}

const Context: any = React.createContext(null)
export {
  Context,
  initialForm,
  initialDrinks,
  initialDrink,
  formReducer,
  drinksReducer,
}