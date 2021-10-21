import React from 'react'
import Loading from '../components/Loading'

export default function NotFound() {

  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 400)
  }, [])

  return (
    <h2 className="m-5">
      {
        isLoading ? <Loading/> :
        <div className="alert alert-dark">
          <span className="fw-bolder">
            404
          </span>
          {" "} /
          Page not found
        </div>
      }
    </h2>
  )
}
