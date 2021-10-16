import React from 'react'
import Context, { initialState } from './store'


interface StoreProps {
  children: any
}
export default function Store(props: StoreProps) {
  return (
    <Context.Provider value={initialState}>
      {props.children}
    </Context.Provider>
  )
}
