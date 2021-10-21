import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './App.css'
import './styles/pallet.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Switch, Route, Redirect } from 'react-router-dom'
import Drinks from './pages/Drinks'
import Drink from './pages/Drink'
import About from './pages/About'
import Favorites from './pages/Favorites'
import NotFound from './pages/NotFound'


export default function App() {
  
  React.useEffect(() => {
    const arr = []
    !(localStorage.getItem('favorites')) && localStorage.setItem('favorites', JSON.stringify(arr))
  }, [])

  return (
    
    <div className="bg-bone">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/drinks" component={Drinks}/>
        <Route exact path="/favorites" component={Favorites}/>
        <Route exact path="/drinks/:id" component={Drink}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/not_found" component={NotFound}/>
        <Redirect from="*" to="/not_found" />
      </Switch>
    </div>
  
  )
}
