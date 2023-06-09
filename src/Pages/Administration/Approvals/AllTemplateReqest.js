import React from 'react'
import { NavLink } from 'react-router-dom';

const AllTemplateReqest = () => {
  return (
    <div className="container mt-3 ">
   
    <div className="row jumbotron box8">
      <div>
          <div className="col-sm-12 mx-t3 mt-3 mb-3">
            <h4>Manage All User Template</h4>
          </div>
          <hr />
       </div>
       
      
         

          <div className="col-sm-12 b-2 m-3 form-group">
        <div className="row">
          <div className="col-sm-12 d-flex justify-content-center gap-5">
            <p><input type='radio' />&nbsp;Pending</p>
            <p><input type='radio' />&nbsp;Approved</p>
            <p><input type='radio' />&nbsp;Disapproved</p>
          </div>
        </div>
            <hr style={{marginRight:"15px",marginLeft:"-15px"}}/>
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
            <th scope="col">User Name</th>
            <th scope="col">Template Id</th>
            <th scope="col">Name</th>
            <th scope="col">LastModified</th>
            <th scope="col">Template</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">User1</th>
            <td>430955900</td>
            <td>3</td>
            <td>wel</td>
            <td>2010</td>
            <td>Pending</td>
            <td>
                <NavLink to="#"><button className='btn btn-primary'>Reject</button></NavLink>
                <button className='btn btn-danger'>Approve</button>
              </td>
            </tr>
   
           <tr>
            <th scope="row">User2</th>
            <td>4955696969</td>
            <td>4</td>
            <td>wel</td>
            <td>2010</td>
            <td>Approved</td>
            <td>
                <NavLink to="#"><button className='btn btn-primary'>Reject</button></NavLink>
                <button className='btn btn-danger'>Approve</button>
              </td>
           </tr>

           <tr>
            <th scope="row">User3</th>
            <td>3059599665</td>
            <td>30</td>
            <td>wel</td>
            <td>2030</td>
            <td>Disapproved</td>
            <td>
                <NavLink to="#"><button className='btn btn-primary'>Reject</button></NavLink>
                <button className='btn btn-danger'>Approve</button>
              </td>
            </tr>
        </tbody>
      </table>
    </div>
    <nav aria-label="Page navigation example">
  <ul className="pagination justify-content-end mt-2">
  <div className="col-sm-8 justify-content-start">
            <p>Showing 1 to 2 of 2 entries</p>
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

export default AllTemplateReqest;