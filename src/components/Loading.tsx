import React from 'react'
import '../styles/loading.css'

export default function Loading() {
  return (
    <div className="d-flex flex-column align-items-center mt-5">
      <div className="lds-ripple"><div></div><div></div></div>
    </div>
  )
}
