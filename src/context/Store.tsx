import React from 'react'
import { initialForm, initialDrinks, initialDrink } from '.'
import { Context } from '.'

const initialState: any = {
  form: initialForm,
  drinks: initialDrinks,
  drink: initialDrink
}
interface StoreProps {
  children: any
}

export default function Store(props: StoreProps) {
  return (
    <Context.Provider value={initialState}>
      {props.children}
    </Context.Provider>
  )
}
