import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { Modal,ModalBody,ModalHeader, Row,Col } from "reactstrap";

const SenderId  = () => {
    const [modal, setModal] = useState(false)

    const handleSubmit = (e) => {
         
    }    
  return (
    <div className="container mt-3">
                 <Modal 
     size='ml'
     isOpen={modal}
    >
       <ModalHeader
       toggle={() => setModal(!modal)} 
       >
          Add User Group
       <p style={{color:"#aaa",fontSize:"14px"}}>Use Creation</p>
       </ModalHeader>
         <ModalBody>
           <form onSubmit={handleSubmit}>
             <Row>
               <Col ml={12}>
                 <label htmlFor='SenderId'>
                   SenderId:
                 </label>
               </Col>

              <Col ml={12}>
                 <input style={{marginTop:"10px"}} type="text" placeholder="Enter SenderId"/>
               </Col>
            </Row>

             <Row>
               <Col ml={12}>
                 <label htmlFor='Content'>
                   Select User(s):
                 </label>
               </Col>

              <Col ml={12}>
                 <input style={{marginTop:"10px"}} type="text"/>
               </Col>
               
             </Row>
           </form>
           <button className='btn mt-3' type='submit' style={{ backgroundColor: "rgb(157, 25, 25)", color: "white",float:"right" }} >
           Save
       </button>
       <button  className='btn mt-3' type='submit' style={{ backgroundColor: "#fff",color:"#aaa", float:"right",marginRight:"20px" }} >
           cancel
       </button>

         </ModalBody>
    </Modal>

        <div className="row jumbotron box8">
      
       
      
         <div className="col-sm-12 b-2 m-3 form-group">
        <div className="row">
          <div className="col-sm-12 mt-3" butt>
            <button className="btn btn-primary btnn" onClick={() =>setModal(true)}>+ Add New</button>&nbsp;<span><button className="btn btn-primary btnn">View SenderId</button></span>
          </div>
        </div>
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
            
          </div>
        </div>
      </div>
       
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">SenderId</th>
            <th scope="col">Purpose</th>
            <th scope="col">Status</th>
           </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">User1</th>
            <td>smbase Promo_w</td>
            <td className='text-primary'>Approved</td>
           </tr>
   
           <tr>
            <th scope="row">User2</th>
            <td>smbase Promo_w</td>
            <td className='text-primary'>Approved</td>
           </tr>

           <tr>
            <th scope="row">User3</th>
            <td>smbase Promo_w</td>
            <td className='text-primary'>Approved</td>
           </tr>

           <tr>
            <th scope="row">User3</th>
            <td>smbase Promo_w</td>
            <td className='text-primary'>Approved</td>
           </tr>

           <tr>
            <th scope="row">User3</th>
            <td>smbase Promo_w</td>
            <td className='text-primary'>Approved</td>
           </tr>

        </tbody>
      </table>
    </div>
    <nav aria-label="Page navigation example">
  <ul className="pagination justify-content-end mt-2">
  <div className="col-sm-8 justify-content-start">
            <p style={{marginLeft:"-120px"}}>Showing 1 to 7 of 7 entries</p>
          </div>
    <li className="page-item disabled">
      <NavLink className="page-link" to="#" tabindex="-1" aria-disabled="true">Previous</NavLink>
    </li>
    <li className="page-item"><NavLink className="page-link" to="#">1</NavLink></li>
    <li className="page-item"><NavLink className="page-link" to="#">2</NavLink></li>
    <li className="page-item"><NavLink className="page-link" to="#">3</NavLink></li>
    <li className="page-item">
      <NavLink className="page-link" to="#">Next</NavLink>
    </li>
  </ul>
</nav>
    </div>
  )
}

export default SenderId ;