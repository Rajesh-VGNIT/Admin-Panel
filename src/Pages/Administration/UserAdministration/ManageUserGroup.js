import React, { useState } from "react";
import { Modal,ModalBody,ModalHeader, Row,Col } from "reactstrap";

const ManageUserGroup = () => {
    const [modal, setModal] = useState(false)

    const handleSubmit = (e) => {
        
        
        }
  return (
    <div className="container mt-3 ">
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
                 <label htmlFor='Content'>
                   Group Name:
                 </label>
               </Col>

              <Col ml={12}>
                 <input style={{marginTop:"10px"}} type="text" placeholder="Enter Group Name"/>
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
        <div>
            <div className="col-sm-12 mx-t3 mt-3 mb-3">
              <h4>Manage User Group</h4>
            </div>
            <hr />
         </div>

        <div className="col-sm-12 mx-t3 mt-3 mb-3">
              <button className="btn btn-primary" onClick={() =>setModal(true)}>
                <span style={{ fontSize: "20px" }}>+</span> Add User Group
              </button>
            </div>

        <div className="col-sm-12 b-2 m-3 form-group">
          <div className="row">
            <div className="col-sm-12 mt-3 d-flex justify-content-between gap-4">
              <p>
                Show{" "}
                <span>
                  <select style={{width:"120px",height:"27px"}}>
                    <option>5</option>
                    <option selected>10</option>
                    <option>20</option>
                  </select>
                </span>{" "}
                entries
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
              <th scope="col">Name</th>
              <th scope="col">Users</th>
              <th scope="col">Create Data</th>
              <th scope="col">Modified Data</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td className="text-primary"><span>Edit </span><span> Delete</span></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td className="text-primary"><span>Edit </span><span> Delete</span></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry the Bird</td>
              <td>@twitter</td>
              <td>@fat</td>
              <td className="text-primary"><span>Edit </span><span> Delete</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUserGroup;
