import React from "react";
import { useNavigate } from "react-router-dom";

const Header =()=>{
const navigat=useNavigate()
const gotoabout =()=>{
    navigat('/about')
}
const gotoabout1 =()=>{
    navigat('/contact')
}
const gotoabout2 =()=>{
    navigat('/list')
}
const gotoabout0 =()=>{
    navigat('/')
}
 return(
    <>
<h1>Logo</h1>
<button  onClick={()=> gotoabout0()}>Home</button>
    <button onClick={()=> gotoabout()} path='about'>About</button>
    <button  onClick={()=> gotoabout1()}  path='contact'>Contact</button>
    <button   onClick={()=> gotoabout2()} path='about'>Crud</button>

    </>
 )   
}
export default Header