import React from 'react'

const Blacklistnumbers = () => {
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
          <div className="col-sm-12 mt-3 d-flex justify-content-between blacklist">
            <label>
              Black List Numbers:
            </label>
            <textarea placeholder='Enter Phone No.'/>
          </div>
        </div>
      </div>
      
      <div className="col-sm-12 b-2 m-3 ">
        <div className="row">
          <div className="col-sm-12 black" >
           <p><span style={{color:"red"}}>Note: </span> Number is comma seprated value like 91205697797,91966076655,917050444455 <span style={{fontWeight:"bold"}}>(With Country Code)</span></p>
           </div>
        </div>
      </div>

      <div className="col-sm-12 b-2 m-3 form-group">
        <div className="row">
          <div className="col-sm-12 mt-3 d-flex gap-5">
            <p>
              Status:
            </p>
            <p style={{marginLeft:"100px",fontWeight:"bold"}}>BLACKLIST</p>
          </div>
        </div>
      </div>

      <div className="col-sm-12 b-2 m-3 ">
        <div className="row">
          <div className="col-sm-12 btnn">
           <button className='btn btn-primary '>Save</button>
           </div>
        </div>
      </div>
       
      
    </div>
    
   </div>
  )
}

export default Blacklistnumbers;