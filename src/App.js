import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Form from './Form';
import Dashboard from './Dashboard';
import Error from './Error';


function App() {
  const [user, setUser] = useState(null)
   
  const [amount, setAmount] = useState(false)

  const [input, setInput] = useState(0);
   
  const addCart = () => {
    setAmount(true)
  }
  
    const increase = () => {
        setInput(input + 1);
    }
    const decrease = () => {
        setInput(input - 1);
    }



  return (
 
 <BrowserRouter>
 <Routes>
     <Route path='/' element={<Form setUser={setUser}/>}/>
     <Route path='dashboard' element={<Dashboard user={user} addCart={addCart} amount={amount} 
     input={input} setInput={setInput} increase={increase} decrease={decrease} />}/>

     <Route path='*' element={<Error/>}/>

 </Routes>
 </BrowserRouter>
  
    
    
   
  );
}

export default App;
