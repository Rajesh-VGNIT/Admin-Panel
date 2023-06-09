import React from 'react'

const Basicinfo = () => {
  return (
    <div className="container mt-0">
      <form>
        <div className="row jumbotron box8">
          
          <div className="row">
            <div className="col">
              <label className=" ms-2">User Name:</label>
            </div>
            <div className="col mt-2">
            <input type="text" className="form-control" placeholder="Enter User Name" />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label className=" ms-2">
                Mobile Number:
              </label>
            </div>
            <div className="col mt-2">
              <input type="text" className="form-control" placeholder="Enter Mobile Number"/>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label className=" ms-2">
                User Id:
              </label>
            </div>
            <div className="col mt-3">
              <input type="text" className="form-control" placeholder="70" />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label className=" ms-2">
                Time-Zone:
              </label>
            </div>
            <div className="col mt-3">
              <input type="text" className="form-control" placeholder="70" />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label className=" ms-2">
                Email-Id:
              </label>
            </div>
            <div className="col mt-3">
              <input type="text" className="form-control" placeholder="Enter Email-Id" />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label className=" ms-2">
                User-Priority:
              </label>
            </div>
            <div className="col mt-3">
              <select className='manage4'>
                <option>5</option>
                <option>10</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label className=" ms-2">
                Account-Role:
              </label>
            </div>
            <div className="col mt-3">
            <select className='manage4'>
                <option>Reseller</option>
                <option>User</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label className=" ms-2">
                Last Login-Id:
              </label>
            </div>
            <div className="col mt-3">
              <input type="text" className="form-control" placeholder="Enter Email-Id" />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label className=" ms-2">
                Validity Upto:
              </label>
            </div>
            <div className="col mt-3">
              <p>Life Time</p>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label className=" ms-2">
                Last Login Date Time:
              </label>
            </div>
            <div className="col mt-3">
              <p>5/22/2023 4:30 13 PM</p>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label className=" ms-2">
                User Currecy:
              </label>
            </div>
            <div className="col mt-3">
            <select className='manage4'>
                <option>EURO</option>
                <option>DOLLER</option>
                <option>INDIAN</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label className=" ms-2">
                Reset Password:
              </label>
            </div>
            <div className="col mt-3">
              <p>Check to Reset Password</p>
            </div>
          </div>


          <div className="col mt-2 mb-2">
            <button type="button" className="btn btn-primary">
              Update Profile Details
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Basicinfo;