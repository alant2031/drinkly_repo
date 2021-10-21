import React from 'react'
interface CategoryBtnProps {
  name: string,
  handler: () => void
}
export default function CategoryBtn(props: CategoryBtnProps) {
  
  return (
    
    <h5>

      <button onClick={props.handler} className="badge fs-5 text-white rounded-pill mx-1 mb-1 bg-fawn text-kombu">
        {props.name}
      </button>
    </h5>

  )
}
