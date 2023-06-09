import React from 'react'

const ClientTransactions = () => {
  return (
    <div className="container mt-3 ">
   
 <div className="row jumbotron box8">
   <div>
       <div className="col-sm-12 mx-t3 mt-3 mb-3">
         <h4>Manage Client Transactions</h4>
       </div>
       <hr />
    </div>


    <div className="col-sm-12 b-2 m-3 form-group">
     <div className="row">
       <div className="col-sm-12 mt-3 d-flex justify-content-between gap-4">
         <p>Account Type&nbsp;
           <span>
             <select style={{width:"120px",height:"27px"}}>
               <option>5</option>
               <option selected>10</option>
               <option>20</option>
             </select>
           </span>
         </p>
         <p style={{ marginRight: "40px" }}>
           Date
         </p>
       </div>
     </div>
   </div>
    
   
       <div className="col-sm-12 mx-t3 mt-3 mb-3 border  pt-3">
         <p><span>note:</span> The Avilable credits balance is visible in the Base Currency</p>
       </div>
       
    

   <div className="col-sm-12 b-2 m-3 form-group">
     <div className="row">
       <div className="col-sm-12 mt-3 d-flex justify-content-between gap-4">
         <p>
           <span>
             <select style={{width:"120px",height:"27px"}}>
               <option>5</option>
               <option selected>10</option>
               <option>20</option>
             </select>
           </span>{" "}
           records
         </p>
         <p style={{ marginRight: "40px" }}>
           Search:
           <span>
             <input type="text" />
           </span>
         </p>
       </div>
     </div>
   </div>
    
   <table class="table table-striped">
     <thead>
       <tr>
         <th scope="col">Transactions Date</th>
         <th scope="col">Messages Type</th>
         <th scope="col">Trasfered By</th>
         <th scope="col">Transfered To</th>
         <th scope="col">Payment-Ref</th>
         <th scope="col">Credit Transfer</th>
         <th scope="col">Credit Before</th>
         <th scope="col">Credit After</th>
       </tr>
     </thead>
     <tbody>
       <tr>
         <th scope="row">10/03/2023</th>
         <td>demo1</td>
         <td>user</td>
         <td>user1</td>
         <td>91- 9722222222</td>
         <td>user1@gmail.com</td>
         <td>10/03/2023 12:21:02</td>
         <td>08/04/2023</td>
        </tr>

       <tr>
       <th scope="row">20/03/2023</th>
         <td>demo2</td>
         <td>user</td>
         <td>user2</td>
         <td>91- 9722222222</td>
         <td>user2@gmail.com</td>
         <td>11/03/2023 12:21:02</td>
         <td>09/04/2023</td>
         </tr>

       <tr>
         <th scope="row">24/03/2023</th>
         <td>demo3</td>
         <td>user</td>
         <td>user3</td>
         <td>91- 9722222222</td>
         <td>user3@gmail.com</td>
         <td>12/03/2023 12:21:02</td>
         <td>10/04/2023</td>
         </tr>
     </tbody>
   </table>
 </div>
</div>
  )
}

export default ClientTransactions;