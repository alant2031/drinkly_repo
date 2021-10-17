import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

interface CardProps {
  strDrink: string,
  strDrinkThumb: string,
  idDrink: string,  
}

export default function Card(props: CardProps) {
  return (
    <div className="col">
      <div className="card shadow-sm">
        
        <img src={props.strDrinkThumb} alt={props.strDrink} />

        <div className="card-body">
          <h4 className="card-title text-kombu">{props.strDrink}</h4>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-outline-secondary text-olive">Details {" "}
                <FontAwesomeIcon icon={faInfoCircle} />
              </button>
            </div>
            <small className="text-muted">ID: {props.idDrink}</small>
          </div>
        </div>
      </div>
    </div>
  )
}
