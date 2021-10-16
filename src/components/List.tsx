import React from 'react'
import Card from './Card'

interface ListProps {
  drinks: Array<any>
}
export default function List(props: ListProps) {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {props.drinks.map((drink) => (
        
        <Card key={drink.idDrink} {...drink} />
        
      ))}
    </div>
  )
}
