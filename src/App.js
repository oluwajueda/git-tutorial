import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Form from './Form';
import Dashboard from './Dashboard';
import Error from './Error';
import CartPage from './CartPage';
import Navbar from './Navbar';
import SharedLayout from './SharedLayout'

const url = 'https://fakestoreapi.com/products';



function App() {
 const [products1, setProducts1] = useState([])
 const [products2, setProducts2] = useState([])

 const [loading, setLoading] = useState(true)

   const fetchProducts = async () => {
        setLoading(true)

        try {
            const response = await fetch(url);
            const items = await response.json();
            setLoading(false);
            setProducts1(items)
            setProducts2(items)
           
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchProducts();
    }, []);


  const [user, setUser] = useState(null)
  
 
  

  

 const filterItems = (category) =>{

  if(category === 'all'){
    setProducts1(products2);
    return;
  }
  const newItems = products2.filter((prod)=> prod.category === category)
       setProducts1(newItems)
 }
   

  // const [amount, setAmount] = useState(false)

  // const [input, setInput] = useState(0);
   
  // const addCart = () => {
  //   setAmount(true)
  // }
  
  //   const increase = () => {
  //       setInput(input + 1);
  //   }
  //   const decrease = () => {
  //       setInput(input - 1);
  //   }



  return (
 
 <BrowserRouter>


 <Routes>
    
    
     <Route path='dashboard' element={<SharedLayout  filterItems={filterItems} />}>
     <Route index element={<Dashboard user={user} loading={loading} products1={products1}/>}/>
     <Route path='cart-page' element={<CartPage/>} />
     </Route>
      <Route path='/' element={<Form setUser={setUser}/>}/>

     <Route path='*' element={<Error/>}/>

 </Routes>
 </BrowserRouter>
  
    
    
   
  );
}

export default App;
