import React, { useEffect } from "react";

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

    // get videos
    const getAllVideos = async () => {
        try {
            const res = await fetch('http://localhost:8000/api/videos');
            const data = await res.json()

            console.log(data.videos)
        } catch (error) {
            
        }
    }

    useEffect(() => {
        getAllVideos()
    }, [])

    return (
        <GlobalContext.Provider value={'HELLO WORLD'}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return React.useContext(GlobalContext)
}