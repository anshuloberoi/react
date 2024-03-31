import React, { useState } from "react";
import List from "./List";

const Add =()=>{
const [form,setform]=useState({
email:'',
password:''
})

const onsubmit =(event) =>{
    event.preventDefault()
}

const eventForm =(e)=>{
    console.log(e);
}
 return(
    <>
    
    <h1>Form</h1>
<form action="" onSubmit={onsubmit}>
<label>email</label>
<input placeholder="email" value={form.email}  onChange={ (e)=> eventForm()} />

<label>Password</label>
<input placeholder="password" value={form.password} onChange={ (e)=> eventForm()} />

<button type="submit">Sign Up</button>
</form>
    <List></List>
    </>
 )   
}
export default Add