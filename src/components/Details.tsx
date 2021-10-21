/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import DetailsField from './DetailsField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation, faHeart, faUndo } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'



function checkFavorite(item: any) {
  const arr: any = localStorage.getItem("favorites")
  const favs: object[] = JSON.parse(arr)
  return favs.some((fav: any) => fav.idDrink === item.idDrink)
}

interface DetailsProps {
  item: any
}
export default function Details(props: DetailsProps) {
  const { item } = props
  const [isFavorite, setIsFavorite] = React.useState(false)

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

  function setFavorite(item: any) {
    const arr: any = localStorage.getItem("favorites")
    const favs: any = JSON.parse(arr)
  
    if(!favs.some((fav: any) => fav.idDrink === item.idDrink)) {
      favs.push(item)
      localStorage.setItem("favorites", JSON.stringify(favs))
      setIsFavorite(true)
    } else {
      const newFavs: any = favs.filter((fav: any) => fav.idDrink !== item.idDrink)
      localStorage.setItem("favorites", JSON.stringify(newFavs))
      setIsFavorite(false)
    }

  }

  React.useEffect(() => {
    setIsFavorite(checkFavorite(item))
  }, [])

  return (
    <div className="d-block d-sm-flex flex-sm-row-reverse justify-content-between">
      
      <div id="IMAGE-THUMB" className="shadow-sm align-self-start rounded mb-1">

        <img src={item.strDrinkThumb} alt={item.strDrink} className="fluid img-thumbnail"/>
      </div>

      <div id="DETAIL-INFO" className="container-fluid">
        <div className="d-flex justify-content-end">

        </div>
        <h3 className="d-flex justify-content-between">
        { isAlcoholic ? 
            
          <span className={`badge text-kombu align-self-center border border-${custom} fw-bolder me-1`}>
            <FontAwesomeIcon icon={faExclamation}/>{" "}
            {item.strAlcoholic}
          </span> : null
        }

          <div onClick={() => setFavorite({
            idDrink: item.idDrink,
            strDrink: item.strDrink,
            strDrinkThumb: item.strDrinkThumb,
            strCategory: item.strCategory,
          })} id="favicon" className="badge text-danger fs-1">
              <FontAwesomeIcon icon={
                isFavorite ? faHeart : farHeart
              }/>
          </div>
        </h3>

        <DetailsField title="Category:">
          <span className="fs-5 fst-italic">{item.strCategory}</span> 
        </DetailsField>
        
        <hr />
        <DetailsField title="Ingredients:">
          <ul className="mt-1">
            {ingredients.map((ing: any, id) => {
              return (
                <li key={id}>{ing} {measures[id]}</li>
              )
            })}
          </ul>
        </DetailsField>
          <hr />
        <DetailsField title="Instructions:">
          <p className="fs-4">
            {item.strInstructions}
          </p>
        </DetailsField>
        <Link to="/drinks" type="button" className="btn btn-info my-2">
          <FontAwesomeIcon icon={faUndo}/>
        </Link>
        
      </div>
    </div>
  )
}
