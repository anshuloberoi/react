import React from 'react';
import './App.css';
import Login from "./Auth/Login.jsx"
import {BrowserRouter, Route, Routes} from "react-router-dom"
const App = ()=> {
  return (
 
<BrowserRouter>
 <Routes>
 <Route path="/" element={<Login></Login>} /> 
 </Routes>
 </BrowserRouter>
 
  
  );
}

export default App;
