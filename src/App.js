import React from 'react'
import Navbar from './Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import Services from './Services';
import Products from './Products';
import Blogs from './Blogs';
import Contacts from './Contacts';
import Clients from './Clients';

const App = () => {
  return (
    <div>
      
      <BrowserRouter>
      <Navbar/>
        <Routes>
          
            <Route exact path='/' element={<Home/>}></Route>
            <Route  exact path='/Blogs' element={<Blogs/>}></Route>
            <Route exact path='/Clients' element={<Clients/>}></Route>
            <Route exact path='/Contacts' element={<Contacts/>}></Route>
            <Route exact path='/Services' element={<Services/>}></Route>
   
        </Routes>
      </BrowserRouter>
  
    </div>
  )
}

export default App