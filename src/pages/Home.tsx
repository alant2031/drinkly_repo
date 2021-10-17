import React from 'react'
import Content from '../components/Content'
import { Link } from 'react-router-dom'
import Loading from '../components/Loading'

export default function Home() {
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    setTimeout(() => setIsLoading(false), 800)
  }, [])

  return (
    <div>
      { isLoading ? <Loading/> :
      
        <Content>
          <div className="p-5 mb-4 rounded-3">
            <div className="container-fluid py-5">
              <h1 className="display-5 fw-bold text-liverdogs">Welcome to DRINKLY,</h1>
              <p className="col-md-8 fs-4">An open source application with a large database information about drinks. You can list by category, search by name, set favorite and see details for a drink.</p>
              <Link className="btn btn-success btn-lg" to="/drinks">GET STARTED</Link>
            </div>           
          </div>
        </Content>
      }
    </div>
  )
}
