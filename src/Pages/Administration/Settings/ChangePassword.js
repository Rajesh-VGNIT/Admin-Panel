import React from 'react'

const ChangePassword = () => {
  return (
    <div className="container mt-3 ">
    <div className="row jumbotron box8">
      <div>
        <div className="col-sm-12 mx-t3 mt-3 mb-3">
          <h4>Change Password</h4>
        </div>
        <hr />
      </div>


      <div className="col-sm-12 b-2 m-3 form-group">
        <div className="row">
          <div className="col-sm-12 mt-3 d-flex gap-5 change1">
            <label>Old Password:</label>
            <input type='text' placeholder="Enter Old Password" />
          </div>

          <div className="col-sm-12 mt-3 d-flex gap-5 change2">
            <label>New Password:</label>
            <input type='text' placeholder='Enter New Password'/>
          </div>

          <div className="col-sm-12 mt-3 d-flex gap-5 change3">
            <label>Confirm New Password:</label>
            <input type='text' placeholder='Enter New Password' />
          </div>


         </div>
         <p className="manage3"><button type='button' className='btn btn-primary'>Change Password</button></p>
      </div>
    </div>
       
    </div>
  )
}

export default ChangePassword;