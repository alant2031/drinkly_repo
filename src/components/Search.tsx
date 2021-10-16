import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Search() {
  return (
    <div className="container d-flex">
      <div className="me-2">
        <label htmlFor="SearchDrinkName" className="form-label"/>
        <input type="text" className="form-control" id="SearchDrinkName" placeholder="Search by drink name"></input>
      </div>
      <button type="button" className="btn btn-primary align-self-end">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  )
}
