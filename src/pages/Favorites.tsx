import React from 'react'
import Content from '../components/Content'
import Header from '../components/Header'
import Loading from '../components/Loading'

import { Link } from 'react-router-dom'

export default function Favorites() {
  const [isLoading, setIsLoading] = React.useState(true)
  const [favorites, setFavorites] = React.useState([])
  React.useEffect(() => {
    const arr: any = localStorage.getItem('favorites')
    const favs: any = JSON.parse(arr)
    setFavorites(favs)
    setTimeout(() => setIsLoading(false), 800)
  }, [])
  return (
    <div>
      {
        isLoading ? <Loading/> :
        <>
          <Header title="Favorites" subtitle="Check your saved favorites drinks." />
          <Content>
            <div className="table-responsive">

              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Thumb</th>
                  </tr>
                </thead>
                <tbody>

                  {
                    favorites.reverse().map((fav: any) => (
                      <tr key={fav.idDrink}>
                        <th scope="row">{fav.idDrink}</th>
                        <td>
                          <Link to={`/drinks/${fav.idDrink}`}>

                            {fav.strDrink}({fav.strCategory})
                          </Link>
                        </td>
                        <td>
                          <div className="thumb">

                            <img className="img-fluid rounded-circle" src={fav.strDrinkThumb} alt={fav.strDrink} />
                          </div>
                        </td>
                      </tr>
                      ))
                  }
                </tbody>
              </table>
            </div>
          </Content>
        </>
      }
    </div>
  )
}
