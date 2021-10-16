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



export default function App() {
  
  return (
    <div className="bg-bone">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/drinks" component={Drinks}/>
        <Route exact path="/favorites" component={Favorites}/>
        <Route exact path="/drinks/:id" component={Drink}/>
        <Route exact path="/about" component={About}/>
        <Redirect from="*" to="/" />
      </Switch>
    </div>
  )
}
