import React from "react";
import { NavLink } from 'react-router-dom';

const Userspamkeywords = () => {
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
            <div className="col-sm-12 mt-3" butt>
              <button
                className="btn btn-primary btnn"
               
              >
                + Add New Spam Keyword
              </button>
            </div>
          </div>
        </div>

        <div className="col-sm-12 b-2 m-3 form-group">
          <div className="row">
            <div className="col-sm-12 mt-3 d-flex justify-content-between gap-4">
              <p>
                <span>
                  <select style={{ width: "120px", height: "27px" }}>
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
              <td className="text-success">Active</td>
              <td className="text-danger">Not Applicable</td>
              <td className="text-danger">No</td>
              <td className="text-danger">No</td>
              <td>08/04/2023</td>
              <td>
                <span className="text-success">Edit</span>&nbsp;/{" "}
                <span className="text-danger">Delete</span>
              </td>
            </tr>

            <tr>
              <th scope="row">User2</th>
              <td>smbase Promo_w</td>
              <td className="text-success">Active</td>
              <td className="text-danger">Not Applicable</td>
              <td className="text-success">Yes</td>
              <td className="text-success">Yes</td>
              <td>05/04/2023</td>
              <td>
                <span className="text-success">Edit</span>&nbsp;/{" "}
                <span className="text-danger">Delete</span>
              </td>
            </tr>

            <tr>
              <th scope="row">User3</th>
              <td>smbase Promo_w</td>
              <td className="text-success">Active</td>
              <td className="text-danger">Not Applicable</td>
              <td className="text-success">Yes</td>
              <td className="text-success">Yes</td>
              <td>02/04/2023</td>
              <td>
                <span className="text-success">Edit</span>&nbsp;/{" "}
                <span className="text-danger">Delete</span>
              </td>
            </tr>
 
            <tr>
              <th scope="row">User4</th>
              <td>smbase Promo_w</td>
              <td className="text-success">Active</td>
              <td className="text-danger">Not Applicable</td>
              <td className="text-success">Yes</td>
              <td className="text-success">Yes</td>
              <td>08/04/2023</td>
              <td>
                <span className="text-success">Edit</span>&nbsp;/{" "}
                <span className="text-danger">Delete</span>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-end mt-2">
          <div className="col-sm-8 justify-content-start">
            <p>Showing 1 to 10 of 35 entries</p>
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
              3
            </NavLink>
          </li>
          <li className="page-item">
            <NavLink className="page-link" to="#">
              4
            </NavLink>
          </li>
          <li className="page-item">
            <NavLink className="page-link" to="#">
              Next
            </NavLink>
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
              <textarea placeholder="Please use code PAYTM" />
              <button className="btn btn-primary">Check for spam</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userspamkeywords;
