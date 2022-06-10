import React, {useState, useContext, useReducer, useEffect} from 'react'
import items from './Items'

const AppContext = React.createContext()

const url = 'https://fakestoreapi.com/products';




const AppProvider = ({ children }) => {

    const [number, setNumber] = useState(0)
    const [total, setTotal] = useState(0)
    const [items,setItems]= useState([]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [input, setInput] = useState(0)
    const [amount, setAmount] = useState(false)


    const openSidebar = () => {
        setIsSidebarOpen(true)
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }
    
    
const FetchItems = async () => {

        const response = await fetch(url);
        const items = await response.json();
        setItems(items)
        console.log(items)
      
    }

    useEffect(()=>{
    FetchItems();
},[])

return(
       <AppContext.Provider value={{number, 
    
       items,
       isSidebarOpen,
    
       setIsSidebarOpen,
       openSidebar,
       closeSidebar,
       amount,
       setAmount,
       }}>
{children}
       </AppContext.Provider>

    )
}


export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}