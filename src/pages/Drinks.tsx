/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import Content from '../components/Content'
import Header from '../components/Header'
import Filter from '../components/Filter'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import List from '../components/List'
import Loading from '../components/Loading'

import { formReducer, drinksReducer } from '../context'
import { initCategories } from '../context/actions'
import { listByCategory } from '../context/actions'

import { Context } from '../context'


export default function Drinks() {

  const context: any = React.useContext(Context)

  const { state, updateForm, updateDrinks } = context

  const [isLoading, setIsLoading] = React.useState(true)
  const [drinks, setDrinks] = React.useState([])
  const [categories, setCategories] = React.useState([])
  const [showFilter, setShowFilter] = React.useState(false)
  const [form_state, form_dispatch] = React.useReducer(formReducer, state.form)
  const [drinks_state, drinks_dispatch] = React.useReducer(drinksReducer, state.drinks)

  React.useEffect(() => {
    initCategories(form_dispatch)
      .then(() => listByCategory(drinks_dispatch))
      .then(() => {
        setTimeout(() => setIsLoading(false), 800)
      })
  }, [])

  React.useEffect(() => {
    setCategories(form_state.categories)
    updateForm(form_state)
  }, [form_state])

  React.useEffect(() => {
    setDrinks(drinks_state.list)
    updateDrinks(drinks_state)
  }, [drinks_state])

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
            <List drinks={state.drinks.list}/>
          </Content>
        </React.Fragment>
      }
    </div>
  )
}
