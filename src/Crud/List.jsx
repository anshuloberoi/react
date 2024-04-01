import React from "react";

const List =(item)=>{
console.log(item);
   const data=item.data
console.log(data);
   

 return(
    <>
<table className="table">
  <thead>
    <tr>
    
      <th scope="col">Email</th>
      <th scope="col">Pawword</th>
    </tr>
  </thead>
  <tbody>
   
      {
         // eslint-disable-next-line array-callback-return
         data.map((item)=>{
         return   <tr>
            <td>{item.email}</td>
            <td>{item.password}</td>
            </tr>
         })
      }
 
 
  </tbody>
</table> 
    </>
 )   
}
export default List