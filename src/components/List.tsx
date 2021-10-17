import React from 'react'
import Card from './Card'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFrown } from '@fortawesome/free-solid-svg-icons'

interface ListProps {
  drinks: Array<any>
}
export default function List(props: ListProps) {

  return (
    <React.Fragment>
      { props.drinks ? 

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3 pb-1">
            {props.drinks.map((drink, id) => (
                
                <Card key={id} {...drink} />
                
              ))}
        </div> :
        <div className="d-flex justify-content-center text-olive h3">
          <div>
            No results {"    "} <FontAwesomeIcon icon={faFrown} />
          </div>
      </div>
      }
    </React.Fragment>
  )
}
