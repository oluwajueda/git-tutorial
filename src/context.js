import React, {useState, useContext, useReducer, useEffect} from 'react'


const AppContext = React.createContext()



 



const AppProvider = ({ children }) => {

  
  

    const [number, setNumber] = useState(0)
    const [total, setTotal] = useState(0)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [input, setInput] = useState(0)
    const [amount, setAmount] = useState(0)
    const [cart, setCart] = useState([])
    const [qty, setQty] = useState(1);
    //  const [menuItems, setMenuItems] = useState(items)
    


    





   
    
    
    
    
    
    const openSidebar = () => {
        setIsSidebarOpen(true)
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }
   




    // const filterItems = (category) =>{
    //     if(category === 'all'){
    //         setMenuItems(items);
    //         return;
    //     }
    //     const newItems = items.filter((item)=>item.category === category)
    //     setMenuItems(newItems)
    // }

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
      setNumber,
      

    
      

    
       }}>
{children}
       </AppContext.Provider>

    )
}


export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}