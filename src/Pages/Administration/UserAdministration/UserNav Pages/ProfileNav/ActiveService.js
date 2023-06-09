import React from 'react'

const ActiveService = () => {
  return (
    <div className="container mt-0">
    <form>
      <div className="row jumbotron box8" >
        
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
          <div className="col">
            <label className=" ms-2">HTTP Web Push:</label>
          </div>
          <div className="col mt-2">
           <button className='btn btn-success'>Active</button>&nbsp;<span><button className='btn btn-Danger'>Deactive</button></span>
          </div>
        </div>

        <div className="row mb-2 mt-2" style={{border:"1px solid #aaa",width:"97%",marginLeft:"15px",borderRadius:"3px"}}>
          <div className="col">
            <label className=" ms-2">
              Configure
            </label>
          </div>
          <div className="col mt-2">
            <p>Mo</p>
          </div>
         
        </div>



        <div className="col mt-2 mb-2">
         
        </div>
      </div>
    </form>
  </div>
  )
}

export default ActiveService;