import React from 'react'
interface CategoryBtnProps {
  name: string,
  handler?: () => void
}
export default function CategoryBtn(props: CategoryBtnProps) {
  
  return (
    
    <button className="badge rounded-pill me-1 bg-fawn text-kombu">
      {props.name}
    </button>

  )
}
