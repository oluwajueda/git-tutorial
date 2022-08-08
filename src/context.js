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
    const [amount, setAmount] = useState(0)
    const [cart, setCart] = useState([])
    const [qty, setQty] = useState(1);

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
},[]);

useEffect (()=>{
    let {total, amount} = cart.reduce(
        (cartTotal, cartItem) => {
            const {price, amount} = cartItem;
            const itemPrice =amount * price;
            cartTotal.total += itemPrice;
            cartTotal.amount += amount;
            console.log(cartTotal)
            console.log(itemPrice)
            console.log(price)
            console.log(amount)
            console.log(itemPrice)
            return cartTotal;
        },
      {total: 0, amount: 0}  
    )
    setTotal(total);
    setAmount(amount)
    
    
}, [cart]);

const addItem = (id,title,price,image) =>{
    setNumber(number + 1)
    
    
        const newObj = {id,title,price,image,number}
        setCart([...cart, {...newObj}  ])
        console.log(newObj)
            }
    

const removeItem = (id) =>{
   setCart(cart.filter((newItem)=> newItem.id !==id))
   console.log('hello')
   setNumber(0)
}



return(
       <AppContext.Provider value={{number, 
    
       items,
       isSidebarOpen,
    
       setIsSidebarOpen,
       openSidebar,
       closeSidebar,
       amount,
       setAmount,
       addItem,
       qty,
       setQty,
       cart,
       setCart,
       removeItem,
       total,
      setNumber
       }}>
{children}
       </AppContext.Provider>

    )
}


export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}