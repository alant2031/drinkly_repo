import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faSearch } from '@fortawesome/free-solid-svg-icons'
import CategoryBtn from './CategoryBtn'

interface FilterProps {
  handler: (value: boolean) => void
}

export default function Filter(props: FilterProps) {
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
      <div className="d-flex mt-4">
        
        <CategoryBtn name="ordinary" />
        <CategoryBtn name="soap" />
        <CategoryBtn name="bla" />
        <CategoryBtn name="blo" />
        
      </div>
      <button className="btn btn-info my-4" onClick={() => props.handler(false)}>
        <FontAwesomeIcon icon={faChevronUp} />
      </button>
    </div>
  )
}
