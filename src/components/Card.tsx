import React from 'react'

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
          <p className="h2 text-kombu">{props.strDrink}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-outline-secondary text-olive">View</button>
            </div>
            <small className="text-muted">ID: {props.idDrink}</small>
          </div>
        </div>
      </div>
    </div>
  )
}
