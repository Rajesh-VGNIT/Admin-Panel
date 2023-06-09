import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { Modal,ModalBody,ModalHeader, Row,Col } from "reactstrap";

const Globalspamkeywords = () => {
    // pop-up code
    const [modal, setModal] = useState(false)

    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post('',{
        
      });
      }
  return (
    <div className="container mt-3 ">
      
       <Modal 
     size='xl'
     isOpen={modal}
    >
       <ModalHeader
       toggle={() => setModal(!modal)} 
       >
       <h1 style={{color:"#aaa",fontSize:"24px"}}>Add Edit Spam keyword</h1>
       </ModalHeader>
         <ModalBody>
           <form onSubmit={handleSubmit}>
             <Row>
             <Col xl={12}>
                 <div style={{marginTop:"10px"}}>
                   <div class="col-sm-12 text-lg-center m-3 form-group">
                            <div class="row">
                                <div class="col-sm-6 text-md-end">
                                   <label>Spam Words:</label>
                                </div>
                                <div class="col-sm-6 text-md-start">
                                    <input type='text' />
                                 </div>
                                
                            </div>
                         </div>
                        
                 </div>
               </Col>
               <Col xl={12}>
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
               </Col>

               <Col xl={12}>
                 <label htmlFor='Content'>
                    <h5 style={{marginLeft:"300px",color:"black"}}>Congratulation! User account has been created successfully</h5>
                    <p style={{marginLeft:"320px"}}>You need to do some neccessary cofiguration and add some balance<br/> before user could send his first SMS. We highly recommend this step</p>
                 </label>
               </Col>

              <Col xl={12}>
                 <div style={{marginTop:"10px"}}>
                   <div class="col-sm-12 text-lg-center m-3 form-group">
                            <div class="row">
                                <div class="col-sm-6 text-md-end">
                                   <button type="button" class="btn btn-success">I will do it,some other time</button>
                                </div>
                                <div class="col-sm-6 text-md-start">
                                    <button type="button" class="btn btn-danger">OK! let's do it</button>
                                 </div>
                                
                            </div>
                         </div>
                        
                 </div>
               </Col>


             </Row>
           </form>

         </ModalBody>
    </Modal>
   
    <div className="row jumbotron box8">
      <div>
          <div className="col-sm-12 mx-t3 mt-3 mb-3">
            <h4>Manage Global Spam Keyword</h4>
          </div>
          <hr />
       </div>
       
      
         <div className="col-sm-12 b-2 m-3 form-group">
        <div className="row">
          <div className="col-sm-12 mt-3" butt>
            <button className="btn btn-primary btnn" onClick={() =>setModal(true)}>+ Add New Spam Keyword</button>
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
            <th scope="col">Keyword</th>
            <th scope="col">Sub Spam Words</th>
            <th scope="col">Status</th>
            <th scope="col">Sender ID</th>
            <th scope="col">Lock Account</th>
            <th scope="col">Notification</th>
            <th scope="col">Date Time</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">User1</th>
            <td>smbase Promo_w</td>
            <td className='text-success'>Active</td>
            <td className='text-danger'>Not Applicable</td>
            <td className='text-success'>Yes</td>
            <td className='text-success'>Yes</td>
            <td>08/04/2023</td>
            <td><span className='text-success'>Edit</span>&nbsp;/ <span className='text-danger'>Delete</span></td>
           </tr>
   
           <tr>
            <th scope="row">User2</th>
            <td>smbase Promo_w</td>
            <td className='text-success'>Active</td>
            <td className='text-danger'>Not Applicable</td>
            <td className='text-success'>Yes</td>
            <td className='text-success'>Yes</td>
            <td>05/04/2023</td>
            <td><span className='text-success'>Edit</span>&nbsp;/ <span className='text-danger'>Delete</span></td>
           </tr>

           <tr>
            <th scope="row">User3</th>
            <td>smbase Promo_w</td>
            <td className='text-success'>Active</td>
            <td className='text-danger'>Not Applicable</td>
            <td className='text-success'>Yes</td>
            <td className='text-success'>Yes</td>
            <td>02/04/2023</td>
            <td><span className='text-success'>Edit</span>&nbsp;/ <span className='text-danger'>Delete</span></td>
           </tr>
        </tbody>
      </table>
    </div>
    <nav aria-label="Page navigation example">
  <ul className="pagination justify-content-end mt-2">
  <div className="col-sm-8 justify-content-start">
            <p style={{marginLeft:"-120px"}}>Showing 1 to 4 of 4 entries</p>
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


<div className="row jumbotron box8">
      <div>
          <div className="col-sm-12 mx-t3 mt-3 mb-3">
            <h4>Spam Checker</h4>
          </div>
          <hr />
       </div>
       
      <div className="col-sm-12 b-2 m-3 form-group">
        <div className="row">
          <div className="col-sm-12 mt-3 d-flex  gap-4 glob">
            <textarea placeholder='Enter Message for Spam Validation.' />
              <button className='btn btn-primary'>Check for spam</button>
            </div>
        </div>
      </div>
       
      
    </div>
   </div>
  )
}

export default Globalspamkeywords;