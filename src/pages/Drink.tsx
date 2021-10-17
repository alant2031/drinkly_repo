import React from 'react'
import { Context } from '../context'
import { listDetails } from '../context/actions'
import { drinkReducer } from '../context'
import Loading from '../components/Loading'

export default function Drink(props: any) {
  const { match: { params: { id } } } = props
  const context: any = React.useContext(Context)
  const { state, updateDrink } = context
  const [drink_state, drink_dispatch] = React.useReducer(drinkReducer, state.drink)

  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    listDetails(drink_dispatch, id)
      .then(() => {
        setTimeout(() => {
          setIsLoading(false)
        }, 800)
      })
  }, [])

  React.useEffect(() => {
    updateDrink(drink_state)
  }, [drink_state])

  return (
    <div>
      DRINK DETAILS: 
      {state.drink.item.strDrink }
    </div>
  )
}
