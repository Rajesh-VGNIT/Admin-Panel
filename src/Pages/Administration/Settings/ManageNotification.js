import React from 'react'

const ManageNotification = () => {
  return (
    <div className="container mt-3 ">
    <div className="row jumbotron box8">
      <div>
        <div className="col-sm-12 mx-t3 mt-3 mb-3">
          <h4>Manage Notification</h4>
        </div>
        <hr />
      </div>


      <div className="col-sm-12 b-2 m-3 form-group">
        <div className="row">
          <div className="col-sm-12 mt-3 d-flex gap-5 manage1">
            <label>Message:</label>
            <textarea placeholder="Enter Message" />
          </div>

          <div className="col-sm-12 mt-3 d-flex gap-5 manage1">
            <label>Alert-Type:</label>
            <select>
                <option>Update</option>
                <option>Alert</option>
                <option>Info</option>
                <option>Promo</option>
            </select>
          </div>

          <div className="col-sm-12 mt-3 d-flex gap-5 manage">
            <label>Message:</label>
            <input type='checkbox' />
          </div>

          <div className="col-sm-12 mt-3 d-flex gap-5 manage1">
            <label>Notify To All Users:</label>
            <input type='checkbox' />
          </div>

          <div className="col-sm-12 mt-3 d-flex gap-5 manage2">
            <label>Select User To Notify:</label>
            <select>
                <option>Nothing Selected</option>
                <option>Alert</option>
                <option>Info</option>
                <option>Promo</option>
            </select>
          </div>

        </div>
         <p className="manage3"><span><button type='button' className='btn btn-danger'>Cancel</button>&nbsp;&nbsp;<button type='button' className='btn btn-primary'>Save</button></span></p>
      </div>
    </div>
       
    </div>
  )
}

export default ManageNotification;