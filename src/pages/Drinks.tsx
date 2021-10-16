import React from 'react'
import Content from '../components/Content'
import Header from '../components/Header'
import Filter from '../components/Filter'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import List from '../components/List'
import Loading from '../components/Loading'

import { initialForm, initialDrinks, formReducer, drinksReducer } from '../context'
import { initCategories } from '../context/actions'
import { listByCategory } from '../context/actions'


export default function Drinks() {
  const [isLoading, setIsLoading] = React.useState(true)
  const [drinks, setDrinks] = React.useState([])
  const [categories, setCategories] = React.useState([])
  const [showFilter, setShowFilter] = React.useState(false)
  const [formState, formDispatch] = React.useReducer(formReducer, initialForm)
  const [drinksState, drinksDispatch] = React.useReducer(drinksReducer, initialDrinks)

  React.useEffect(() => {
    initCategories(formDispatch)
      .then(() => listByCategory(drinksDispatch))
      .then(() => {
        setTimeout(() => setIsLoading(false), 1000)
        
      })
  }, [])

  React.useEffect(() => {
    setCategories(formState.categories)
  }, [formState])

  React.useEffect(() => {
    setDrinks(drinksState.drinks)
  }, [drinksState])

  return (
    <div>
      {
        isLoading ? <Loading /> :
        <React.Fragment>
          <Header title="Drinks" subtitle="A list of drinks. Pick a category or search by name."/>
          <Content>
            { !showFilter ? 
              <div className="d-flex justify-content-center">
                <button className="btn btn-info mb-3" onClick={() => setShowFilter(true)}>
                  <FontAwesomeIcon icon={faChevronDown} />
                </button> 
              </div>
              : null
            }
            { showFilter ? <Filter categories={categories} handler={setShowFilter}/> : null}
            <List drinks={drinks}/>
          </Content>
        </React.Fragment>
      }
    </div>
  )
}
