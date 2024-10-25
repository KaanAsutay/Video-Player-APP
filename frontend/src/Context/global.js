import React from "react";

const GlobalContext =  React.createContext()

const reducer = (state, action) => {
    switch(action.type) {
        
    }

    return state
}

export const GlobalProvider = ({children}) => {

    const initialState = {
        videos: [],
        loading: false
    }

    const [state, dispatch] = React.useReducer(reducer, initialState)

    return (
        <GlobalContext.Provider value={'HELLO WORLD'}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return React.useContext(GlobalContext)
}