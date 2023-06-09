import React from 'react'

const Sitebranding = () => {
  return (
    <div className="container mt-3 ">
    <div className="row jumbotron box8">
      <div>
        <div className="col-sm-12 mx-t3 mt-3 mb-3">
          <h4>Site Branding</h4>
        </div>
        <hr />
      </div>

      <div className="col-sm-12 b-2 m-3 form-group">
        <div className="row">
          <div className="col-sm-12 mt-3 d-flex gap-4">
            <p><span style={{color:"black"}}><i className="bi bi-earth"></i></span> Domain Pointing</p>
            <p>Company Information</p>
            <p>SMTP Setting</p>
          </div>
          <hr style={{marginRight:"25px",marginLeft:"-20px"}}/>
        </div>
      </div>

      <div className="col-sm-12 b-2 m-3 form-group">
        <div className="row">
          <div className="col-sm-12 mt-3 d-flex  gap-4 glob">
            <p className='mt-2'>Domian or Sub-Domain</p>
            <input placeholder="Enter Domain/Sub-domain" />
            <h5 className='mt-2 ms-5'>Enter the Domain Here</h5>
          </div>
          <p className='mt-2'>Before You enter your domain or subdomain, you need to setup An a Record for your Domain which should point to your IP address</p>
        </div>
         <button type='button' className='btn btn-primary'>Save</button>
      </div>
    </div>
       
    </div>
    
          
    

  )
}

export default Sitebranding;