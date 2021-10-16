import React from 'react'
import Content from '../components/Content'
import Header from '../components/Header'
import Filter from '../components/Filter'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import List from '../components/List'


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
  const [showFilter, setShowFilter] = React.useState(false)
  return (
    <div>
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
        { showFilter ? <Filter handler={setShowFilter}/> : null}
        <List drinks={drinks}/>
      </Content>
    </div>
  )
}
