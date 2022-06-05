import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Form from './Form';
import Dashboard from './Dashboard';
import Error from './Error';


function App() {
  const [user, setUser] = useState(null)
   

  return (
 
 <BrowserRouter>
 <Routes>
     <Route path='/' element={<Form setUser={setUser}/>}/>
     <Route path='dashboard' element={<Dashboard user={user}/>}/>

     <Route path='*' element={<Error/>}/>

 </Routes>
 </BrowserRouter>
  
    
    
   
  );
}

export default App;
