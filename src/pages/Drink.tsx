/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Context } from '../context'
import { listDetails } from '../context/actions'
import { drinkReducer } from '../context'
import Loading from '../components/Loading'
import Header from '../components/Header'
import Content from '../components/Content'
import Details from '../components/Details'

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
      {
        isLoading ? <Loading /> :
        <React.Fragment>

          <Header title="Details" subtitle={drink_state.item.strDrink}/>
          <Content>
            <Details item={drink_state.item}/>
          </Content>
        </React.Fragment>
      }
    </div>
  )
}
