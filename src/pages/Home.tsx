import React from 'react'
import Content from '../components/Content'

export default function Home() {
  return (
    <div>
      <Content>
        <div className="p-5 mb-4 rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold text-liverdogs">Welcome to DRINKLY,</h1>
            <p className="col-md-8 fs-4">An open source application with a large database information about drinks. You can list by category, search by name, set favorite and see details for a drink.</p>
            <button className="btn btn-success btn-lg" type="button">GET STARTED</button>
          </div>
          
        </div>
      </Content>
    </div>
  )
}
