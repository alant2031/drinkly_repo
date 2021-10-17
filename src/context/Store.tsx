import React from 'react'
import { Context } from '.'

const initialState: any = {
  form: {
    categories: [],
  },
  drinks: {
    list: []
  },
  drink: {
    item: {},
    isFavorite: false
  },
  favorites: {
    list: []
  }
}


interface StoreProps {
  children: any
}
export default function Store(props: StoreProps) {
  const [state, setState] = React.useState(initialState)
  
  function updateForm(form: any) {
    setState({
      ...state,
      form
    })
  }
  function updateDrinks(drinks: any) {
    setState({
      ...state,
      drinks
    })
  }
  function updateDrink(drink: any) {
    setState({
      ...state,
      drink
    })
  }
  
  return (
    <Context.Provider value={{state, updateForm, updateDrinks, updateDrink}}>
      {props.children}
    </Context.Provider>
  )
}
