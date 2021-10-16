import React from 'react'
import Content from '../components/Content'
import Header from '../components/Header'
import Search from '../components/Search'


export default function Drinks() {
  return (
    <div>
      <Header title="Drinks" subtitle="A list of drinks. Pick a category or search by name."/>
      <Content>
        <Search/>
        DRINKS
      </Content>
    </div>
  )
}
