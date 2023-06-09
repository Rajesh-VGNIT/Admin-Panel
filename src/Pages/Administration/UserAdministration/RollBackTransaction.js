import React from 'react'
import { NavLink } from 'react-router-dom';

const RollBackTransaction = () => {
  return (
    <div className="container mt-3 ">
   
    <div className="row jumbotron box8">
      <div>
          <div className="col-sm-12 mx-t3 mt-3 mb-3">
            <h4>View Rollback Transactions</h4>
          </div>
          <hr />
       </div>
       
      
          <div className="col-sm-12 mx-t3 ms-2 mt-3 mb-3 me-5 border bg-light pt-3">
            <p><span>note:</span> The Avilable credits balance is visible in the Base Currency</p>
          </div>

          <div className="col-sm-12 b-2 m-3 form-group">
        <div className="row">
          <div className="col-sm-12 mt-3 d-flex gap-4" butt>
            <input type='text' placeholder='Enter Username' />
            <input type='text' placeholder='Enter Gateway Name' />
            <button className="btn btn-primary btnn">Date</button>
            <button className="btn btn-info text-#fff btnn">Submit</button>
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
            <th scope="col">User Name</th>
            <th scope="col">Gateway</th>
            <th scope="col">Error Code</th>
            <th scope="col">Credit Before</th>
            <th scope="col">Credit After</th>
            <th scope="col">Total Rollback</th>
            <th scope="col">Rollback Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">User1</th>
            <td>smbase Promo_w</td>
            <td>3</td>
            <td>34532</td>
            <td>2000</td>
            <td>30</td>
            <td>08/04/2023</td>
           </tr>
   
           <tr>
            <th scope="row">User2</th>
            <td>smbase Promo_w</td>
            <td>4</td>
            <td>34533</td>
            <td>2010</td>
            <td>20</td>
            <td>05/04/2023</td>
           </tr>

           <tr>
            <th scope="row">User3</th>
            <td>smbase Promo_w</td>
            <td>30</td>
            <td>34532</td>
            <td>2030</td>
            <td>10</td>
            <td>02/04/2023</td>
           </tr>
        </tbody>
      </table>
    </div>
    <nav aria-label="Page navigation example">
  <ul className="pagination justify-content-end mt-2">
  <div className="col-sm-8 justify-content-start">
            <p>Showing 1 to 10 of 10000 entries</p>
          </div>
    <li className="page-item disabled">
      <NavLink className="page-link" to="#" tabindex="-1" aria-disabled="true">Previous</NavLink>
    </li>
    <li className="page-item"><NavLink className="page-link" to="#">1</NavLink></li>
    <li className="page-item"><NavLink className="page-link" to="#">2</NavLink></li>
    <li className="page-item"><NavLink className="page-link" to="#">3</NavLink></li>
    <li className="page-item"><NavLink className="page-link" to="#">4</NavLink></li>
    <li className="page-item"><NavLink className="page-link" to="#">5</NavLink></li>
    <li className="page-item">
      <NavLink className="page-link" to="#">Next</NavLink>
    </li>
  </ul>
</nav>
   </div>
  )
}

export default RollBackTransaction;