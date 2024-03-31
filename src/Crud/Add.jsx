import React, { useState } from "react";
import List from "./List";

const Add =()=>{
const [form,setform]=useState({
email:'',
password:''
})
const [array,arrayData]=useState([])

const onsubmit =(event) =>{
    event.preventDefault()
    console.log(form);
        
    arrayData([...array,form])

    console.log(array,'hiiiiiiii');
}

 return(
    <>
    
    <h1>Form</h1>
<form action="" onSubmit={onsubmit}>
<label>email</label>
<input placeholder="email" value={form.email}  onChange={ (e)=> setform({...form,email: e.target.value})} />

<label>Password</label>
<input placeholder="password" value={form.password} onChange={ (e)=> setform({...form,password: e.target.value})} />

<button type="submit">Sign Up</button>
</form>
    <List></List>
    </>
 )   
}
export default Add