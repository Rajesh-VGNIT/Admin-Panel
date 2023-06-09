import React from "react";

const ClientDetailList = () => {
  return (
    <div className="container mt-3 ">
      <div className="row jumbotron box8">
        <div>
          <div className="col-sm-12 mx-t3 mt-3 mb-3">
            <h4>Manage All Clients</h4>
          </div>
          <hr />
        </div>

        <div className="col-sm-12 mx-t3 mt-3 mb-3">
          <p>The Avilable credits balance is visible in the Base Currency</p>
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
              <th scope="col">Id</th>
              <th scope="col">Parent</th>
              <th scope="col">Role</th>
              <th scope="col">User Name</th>
              <th scope="col">Mobile</th>
              <th scope="col">Email</th>
              <th scope="col">Registered On</th>
              <th scope="col">Expire Date</th>
              <th scope="col">Credits</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">10</th>
              <td>demo</td>
              <td>user</td>
              <td>user1</td>
              <td>91- 9722222222</td>
              <td>user1@gmail.com</td>
              <td>10/03/2023 12:21:02</td>
              <td>08/04/2023</td>
              <td>0</td>
              <td>active</td>
            </tr>

            <tr>
              <th scope="row">20</th>
              <td>demo</td>
              <td>user</td>
              <td>user1</td>
              <td>91- 9722222222</td>
              <td>user2@gmail.com</td>
              <td>11/03/2023 12:21:02</td>
              <td>09/04/2023</td>
              <td>0</td>
              <td>expired</td>
            </tr>

            <tr>
              <th scope="row">30</th>
              <td>demo</td>
              <td>user</td>
              <td>user1</td>
              <td>91- 9722222222</td>
              <td>user3@gmail.com</td>
              <td>12/03/2023 12:21:02</td>
              <td>10/04/2023</td>
              <td>0</td>
              <td>active</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientDetailList;
