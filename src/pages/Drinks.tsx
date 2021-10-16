import React from 'react'
import Content from '../components/Content'
import Header from '../components/Header'
import Filter from '../components/Filter'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import List from '../components/List'
import Loading from '../components/Loading'

import { initialForm, formReducer } from '../context'
import { initCategories } from '../context/actions'

const drinks = [
  {
    strDrink: "my_drink One"
  },
  {
    strDrink: "my_drink Two"
  },
  {
    strDrink: "my_drink Three"
  },
]

export default function Drinks() {
  const [isLoading, setIsLoading] = React.useState(true)
  const [categories, setCategories] = React.useState([])
  const [showFilter, setShowFilter] = React.useState(false)
  const [state, dispatch] = React.useReducer(formReducer, initialForm)

  React.useEffect(() => {
    initCategories(dispatch)
      .then(() => setIsLoading(false))
  }, [])

  React.useEffect(() => {
    setCategories(state.categories)
  }, [state])

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
