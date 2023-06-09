import React from 'react'
import { NavLink } from 'react-router-dom';

const ManageEmail = () => {
  return (
    <div className="container mt-3 ">
    <div className="row jumbotron box8">
      <div>
        <div className="col-sm-12 mx-t3 mt-3 mb-3">
          <h4>Manage User Spam Keyword</h4>
        </div>
        <hr />
      </div>


      <div className="col-sm-12 b-2 m-3 form-group">
        <div className="row">
          <div className="col-sm-12 mt-3 d-flex justify-content-between gap-4">
            <p>Show&nbsp;
              <span>
                <select style={{ width: "120px", height: "27px" }}>
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
            <th scope="col">Event Default</th>
            <th scope="col">Description</th>
            <th scope="col">Profile</th>
            <th scope="col">Invoice</th>
            <th scope="col">Price</th>
            <th scope="col">Accounts</th>
            <th scope="col">Technical</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">message Queve</th>
            <td>smbase Promo_w</td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><span className="text-success">Edit</span></td>
          </tr>

          <tr>
            <th scope="row">User2</th>
            <td>smbase Promo_w</td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><span className="text-success">Edit</span></td>
          </tr>

          <tr>
            <th scope="row">User3</th>
            <td>smbase Promo_w</td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><span className="text-success">Edit</span></td>
          </tr>

          <tr>
            <th scope="row">User4</th>
            <td>smbase Promo_w</td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><input type="checkbox" /></td>
            <td><span className="text-success">Edit</span></td>
          </tr>

        </tbody>
      </table>
    </div>
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-end mt-2">
        <div className="col-sm-8 justify-content-start">
          <p>Showing 1 to 10 of 10 entries</p>
        </div>
        <li className="page-item disabled">
          <NavLink
            className="page-link"
            to="#"
            tabindex="-1"
            aria-disabled="true"
          >
            Previous
          </NavLink>
        </li>
        <li className="page-item">
          <NavLink className="page-link" to="#">
            1
          </NavLink>
        </li>
        <li className="page-item">
          <NavLink className="page-link" to="#">
            2
          </NavLink>
        </li>
       
        <li className="page-item">
          <NavLink className="page-link" to="#">
            Next
          </NavLink>
        </li>
      </ul>
    </nav>

  </div>
  )
}

export default ManageEmail;