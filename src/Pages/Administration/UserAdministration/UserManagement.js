import React from 'react'
import { useNavigate } from 'react-router-dom';
import Usernav from './Usernav';

const UserManagement = () => {
  const navigate = useNavigate()
  return (
    <div className="container mt-3 ">
    <div>
    <div className="row jumbotron box8">
         
                <div>
                  <div className="row jumbotron box8">
                  <div>
                      <Usernav/>
                    </div>
                    <div className="col-sm-12 mx-t3 mt-3 mb-3">
                      <h4>User Management</h4>
                    </div>
                    <hr/>
                    <div className="col-sm-12  m-3 form-group">
                        <div className="row">
                            <div className="col-sm-12 mt-3">
                               <input style={{width:"140px",height:"38px",borderRadius:"3px",border:"2px solid #aaa",paddingLeft:"5px",marginTop:"4px"}} type='text' placeholder='HexText' /><span> <button type="button" className="btn btn-primary">View</button></span>
                               <span>&nbsp;<button type="button" onClick={() =>{
                                navigate("/AddNewUser")
                               }} className="btn btn-danger">Add New User</button></span>
                            </div>
                        </div>
                     </div>
                     <div className="col-sm-12  m-3 form-group">
                        <div className="row">
                            <div className="col-sm-12 mt-3 d-flex gap-5">
                              <p><span><i class="bi bi-person-fill"></i></span> Impersonate User</p>
                              <p>Manage Rate Plan</p>
                              <p>Entity ID: <span>12345678</span></p>
                              <p>Status</p>
                              <div style={{float:"right",marginLeft:"13rem",color:"skyblue"}}>
                                <p><span><i className="bi bi-trash3"></i></span> Delete This User</p>
                              </div>
                            </div>
                        </div>
                     </div>

                     
                  </div>
                </div>
             
        

  </div>
                   {/* <div>
                      <Usernav/>
                    </div> */}
</div>
</div>
  )
}

export default UserManagement;