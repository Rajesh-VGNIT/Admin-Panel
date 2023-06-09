import React from 'react'

const UserSetting = () => {
  return (
    <div className="container mt-0">
    <form>
      <div className="row jumbotron box8">
        
        <div className="row">
          <div className="col">
            <label className=" ms-2">User Lock Status:</label>
          </div>
          <div className="col mt-2">
           <button className='btn btn-light'>Active</button>&nbsp;<span><button className='btn btn-danger'>Deactive</button></span>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label className=" ms-2">User Spam Validation:</label>
          </div>
          <div className="col mt-2">
           <button className='btn btn-success'>Active</button>&nbsp;<span><button className='btn btn-Danger'>Deactive</button></span>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label className=" ms-2">Global Spam Validation:</label>
          </div>
          <div className="col mt-2">
           <button className='btn btn-success'>Active</button>&nbsp;<span><button className='btn btn-Danger'>Deactive</button></span>
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <label className=" ms-2">API IP Validation:</label>
          </div>
          <div className="col-3 mt-2">
           <button className='btn btn-success'>Active</button>&nbsp;<span><button className='btn btn-Danger'>Deactive</button></span>
          </div>
          <div className="col-2 mt-2">
            <input type="text" className="form-control" placeholder="111.51.30.1" />
          </div>
          <div className="col-1 mt-2">
          <button className='btn btn-primary'>Edit</button>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label className=" ms-2">HTTP Web Push:</label>
          </div>
          <div className="col mt-2">
           <button className='btn btn-success'>Active</button>&nbsp;<span><button className='btn btn-Danger'>Deactive</button></span>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-6">
            <label className=" ms-2">
              User Overselling Threshold:
            </label>
          </div>
          <div className="col-3 mt-2">
            <input type="text" className="form-control" placeholder="700" />
          </div>
          <div className="col-3 mt-2">
          <button className='btn btn-primary'>Edit</button>
          </div>
        </div>



        <div className="col mt-2 mb-2">
         
        </div>
      </div>
    </form>
  </div>
  )
}

export default UserSetting;