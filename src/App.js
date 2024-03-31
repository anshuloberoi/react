import React from 'react';
import './App.css';
import Login from "./Auth/Login.jsx"
import Add from "./Crud/Add.jsx"
import List from "./Crud/List.jsx"
import View from "./Crud/View.jsx"
import Home from "./Home/Home.jsx"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Header from './Theam/Header.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import Layout from './Theam/Layout.jsx';


const App = ()=> {
  return (
 
<BrowserRouter>
 <Routes>

 <Route path="/" element={<Layout/>} > 
 <Route index element={<Home></Home>}></Route>
 <Route  path='/about' element={<About></About>}></Route>
 <Route  path='/contact' element={<Contact></Contact>}></Route>
 <Route  path='/add' element={<Add></Add>}></Route>
 <Route  path='/list' element={<List></List>}></Route>
 <Route  path='/view' element={<View></View>}></Route>





</Route>

 </Routes>
 </BrowserRouter>
 
  
  );
}

export default App;
