import React, {useState, useContext, useReducer, useEffect} from 'react'
import items from './Items'

const AppContext = React.createContext()




const AppProvider = ({ children }) => {
   
    const [number, setNumber] = useState(0)

    const increase = () => {
        setNumber(number + 1)
    }

return(
       <AppContext.Provider value={{number, increase}}>
{children}
       </AppContext.Provider>

    )
}


export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}