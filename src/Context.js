import React, { createContext, useReducer, useContext } from 'react'

const Context = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      window.sessionStorage.setItem('token', action.payload)
      return {
        ...state,
        isAuth: true
      }
    case 'LOGOUT':
      window.sessionStorage.removeItem('token')
      return {
        ...state,
        isAuth: false
      }
    default:
      return state
  }
}

const initialState = {
  isAuth: window.sessionStorage.getItem('token') ? true : false
}

export const Provider = ({ children }) => {
  return (
    <Context.Provider value={useReducer(reducer, initialState)}>
      {children}
    </Context.Provider>
  )
}

export const useStateValue = () => useContext(Context);
