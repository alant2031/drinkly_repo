import React from 'react'
import Card from './Card'

import { listByCategory } from '../context/actions'
import { initialDrinks, drinksReducer } from '../context'
import { Context } from '../context'

interface ListProps {
  drinks: Array<any>
}
export default function List(props: ListProps) {
  const [drinks_state, drinksDispatch] = React.useReducer(drinksReducer, initialDrinks)

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3 pb-1">
      {props.drinks.map((drink, id) => (
        
        <Card key={id} {...drink} />
        
      ))}
    </div>
  )
}
