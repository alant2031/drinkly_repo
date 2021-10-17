import React from 'react'
import Card from './Card'

import { listByCategory } from '../context/actions'
import { drinksReducer } from '../context'
import { Context } from '../context'

interface ListProps {
  drinks: Array<any>
}
export default function List(props: ListProps) {

  return (
    <React.Fragment>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3 pb-1">
        {props.drinks.map((drink, id) => (
          
          <Card key={id} {...drink} />
          
        ))}
    </div>
    </React.Fragment>
  )
}
