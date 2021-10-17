import { faExclamation, faYinYang } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import DtField from './DtField';
interface DetailsProps {
  item: any
}
export default function Details(props: DetailsProps) {
  const { item } = props
  const ingredients = Object.entries(item).filter(entrie => {
    const [key, value] = entrie
    return key.startsWith('strIngredient') && value;
  }).map(el => {
    return el[1]
  })

  const measures = Object.entries(item).filter(entrie => {
    const [key, value] = entrie
    return key.startsWith('strMeasure') && value;
  }).map(el => {
    return el[1]
  })
  const isAlcoholic = item.strAlcoholic === "Alcoholic"
  const custom = item.strAlcoholic === "Alcoholic" ? "danger" : null

  return (
    <div className="d-block d-sm-flex flex-sm-row-reverse justify-content-between">
      
      <div id="image" className="shadow-sm align-self-start rounded mb-1">

        <img src={item.strDrinkThumb} alt={item.strDrink} className="img-fluid img-thumbnail"/>
      </div>

      <div id="info" className="container-fluid">
        { isAlcoholic ? 
        
          <h3>
            <span className={`badge text-${custom} border border-${custom} fw-bolder`}>
              <FontAwesomeIcon icon={faExclamation}/> {" "}
              {item.strAlcoholic}
            </span>
          </h3> : null
        }
        <DtField title="Category:">
          <span className="fs-5 fst-italic">{item.strCategory}</span> 
        </DtField>
        
        <hr />
        <DtField title="Ingredients:">
          <ul className="mt-1">
            {ingredients.map((ing: any, id) => {
              return (
                <li key={id}>{ing} {measures[id]}</li>
              )
            })}
          </ul>
        </DtField>
          <hr />
        <DtField title="Instructions:">
          <p className="fs-3">
            {item.strInstructions}
          </p>
        </DtField>
        
      </div>
    </div>
  )
}
