import React from "react"

export const initialState = {
  drinks: {
    list: []
  },
  drink: {
    item: {},
    isFavorite: false,
    nameDrink: "my_drink Context"
  },
  form: {
    categories: [],
    match: null
  }

}

export default React.createContext(initialState)