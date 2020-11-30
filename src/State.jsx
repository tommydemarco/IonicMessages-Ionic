import React, { createContext, useReducer } from 'react'

let AppContext = createContext({})

const initialState = {
    appName: "Ionic Messages"
}

const reducer = (state, action) => {
    switch(action.type) {
        default:
            return state
    }
}


const AppState = ({ children }) => {
    const [ state, dispatch ] = useReducer(reducer, initialState)

    const value = { state, dispatch }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppState }