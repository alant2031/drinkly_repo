/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faSearch } from '@fortawesome/free-solid-svg-icons'
import CategoryBtn from './CategoryBtn'

import { listByCategory } from '../context/actions'
import { drinksReducer } from '../context'
import { Context } from '../context'

interface FilterProps {
  categories: any[]
  handler: (value: boolean) => void
}
export default function Filter(props: FilterProps) {
  const context: any = React.useContext(Context)
  const { state, updateDrinks } = context
  const [drinks_state, drinks_dispatch] = React.useReducer(drinksReducer, state.drinks)

  React.useEffect(() => {
    updateDrinks(drinks_state)
  }, [drinks_state])

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="d-flex justify-content-center">
        <div className="me-2">
          <label htmlFor="SearchDrinkName" className="form-label"/>
          <input type="text" className="form-control" id="SearchDrinkName" placeholder="Search by drink name"></input>
        </div>
        <button type="button" className="btn btn-primary align-self-end">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <div className="d-flex flex-column container">
        <div className="fs-4 f-italic text-kombu align-self-center mt-3">Categories:</div>
        <div className="d-flex flex-wrap mt-1">
          {props.categories.map((category) => (
          <React.Fragment key={category.strCategory}>
            <CategoryBtn name={category.strCategory} handler={() => listByCategory(drinks_dispatch, category.strCategory)}/>
          </React.Fragment> 
          ))}
          
        </div>
      </div>
      <button className="btn btn-info my-4" onClick={() => props.handler(false)}>
        <FontAwesomeIcon icon={faChevronUp} />
      </button>
    </div>
  )
}
