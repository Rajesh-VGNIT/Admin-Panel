import React, { useState } from 'react'
import axios from 'axios';
import { Modal,ModalBody,ModalHeader, Row,Col } from "reactstrap";

const AddNewUser = () => {

   // pop-up code
   const [modal, setModal] = useState(false)

   const [subject, setSubject] = useState('')
   const [content, setContent] = useState('')

 //update/create data
const [fname, setFname] = useState('')
const [lname, setLname] = useState('')
const [address, setAddress] = useState('')
const [uname, setUname] = useState('')
const [password, setPassword] = useState('')
const [cpassword, setCpassword] = useState('')
const [email, setEmail] = useState('')
const [country, setCountry] = useState('')
const [phone, setPhone] = useState('')
const [timezone, setTimeZone] = useState('')
const [useraccounttype, setUserAccountType] = useState('')
const [invoiceemail, setInvoiceEmail] = useState('')
const [accountemail, setAccountEmail] = useState('')
const [priceupdateemail, setPriceUpdateEmail] = useState('')
const [technicalemail, setTechnicalEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('',{
      
    });
    }

    // const handleSubmit =() => {
    //   alert("welcome")
    // }
  return (
    // ===================Step1=======================
    <div className="container ">
       <Modal 
     size='xl'
     isOpen={modal}
    >
       <ModalHeader
       toggle={() => setModal(!modal)} 
       >
          Add Notification
       <p style={{color:"#aaa",fontSize:"14px"}}>Use Creation</p>
       </ModalHeader>
         <ModalBody>
           <form onSubmit={handleSubmit}>
             <Row>
               <Col xl={12}>
                 <label htmlFor='Content'>
                    <h5 style={{marginLeft:"300px",color:"black"}}>Congratulation! User account has been created successfully</h5>
                    <p style={{marginLeft:"320px"}}>You need to do some neccessary cofiguration and add some balance<br/> before user could send his first SMS. We highly recommend this step</p>
                 </label>
               </Col>

              <Col xl={12}>
                 <div style={{marginTop:"10px"}}>
                   <div class="col-sm-12 text-lg-center m-3 form-group">
                            <div class="row">
                                <div class="col-sm-6 text-md-end">
                                   <button type="button" class="btn btn-success">I will do it,some other time</button>
                                </div>
                                <div class="col-sm-6 text-md-start">
                                    <button type="button" class="btn btn-danger">OK! let's do it</button>
                                 </div>
                                
                            </div>
                         </div>
                        
                 </div>
               </Col>


             </Row>
           </form>

         </ModalBody>
    </Modal>

    <div className="container ">
      <div>
      <div className="row jumbotron box8">
    <div className="accordion mb-3 mt-3" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
            Basic Information
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
         
          <div className="accordion-body">
              <div className="container ">
                  <div>
                    <div className="row  box8">
                      <div className="col-sm-6 form-group">
                        <label for="name-f">First Name</label>
                        <input type="text" className="form-control" onChange = {(e) => setFname(e.target.value)}  placeholder="Enter First Name" required />
                      </div>
                      <div className="col-sm-6 form-group">
                        <label for="name-l">Last Name</label>
                        <input type="text" className="form-control" onChange = {(e) => setLname(e.target.value)}  placeholder="Enter Last Name" required />
                      </div>
                      <div className="col-sm-6 form-group">
                        <label for="address-1">Address </label>
                        <input type="address" className="form-control" onChange = {(e) => setAddress(e.target.value)}  placeholder="Locality/House/Street no." required />
                      </div>
                      <div className="col-sm-6 form-group">
                          <label for="name-l">User Name</label>
                          <input type="text" className="form-control" onChange = {(e) => setUname(e.target.value)}  placeholder="Enter User Name" required />
                        </div>
                        <div className="col-sm-6 form-group">
                          <label for="name-l">Password</label>
                          <input type="text" className="form-control"onChange = {(e) => setPassword(e.target.value)} placeholder="Enter Password" required />
                        </div>
                        <div className="col-sm-6 form-group">
                          <label for="name-l">Confirm Password</label>
                          <input type="text" className="form-control" onChange = {(e) => setCpassword(e.target.value)}  placeholder="Enter Confirm Password" required />
                        </div>
                      <div className="col-sm-6 form-group">
                        <label for="email">Email</label>
                        <input type="email" className="form-control" onChange = {(e) => setEmail(e.target.value)} placeholder="Enter Email" required />
                      </div>
                      
                      <div className="col-sm-2 form-group">
                          <label for="cod">Country</label>
                          <select className="form-control browser-default  onChange = {(e) => setCountry(e.target.value)} custom-select">
                            <option data-countryCode="US" value="1">USA (+1)</option>
                            <option data-countryCode="GB" value="44">UK (+44)</option>
                            <option disabled="disabled">Other Countries</option>
                            <option data-countryCode="DZ" value="213">Algeria (+213)</option>
                            <option data-countryCode="AD" value="376">Andorra (+376)</option>
                            <option data-countryCode="CU" value="53">Cuba (+53)</option>
                            <option data-countryCode="CY" value="90">Cyprus - North (+90)</option>
                            <option data-countryCode="HU" value="36">Hungary (+36)</option>
                            <option data-countryCode="IS" value="354">Iceland (+354)</option>
                            <option data-countryCode="IN" value="91" selected>India (+91)</option>
                            <option data-countryCode="YE" value="967">Yemen (South)(+967)</option>
                            <option data-countryCode="ZM" value="260">Zambia (+260)</option>
                            <option data-countryCode="ZW" value="263">Zimbabwe (+263)</option>
                          </select>
                        </div>
          
                        <div className="col-sm-4 form-group">
                          <label for="tel">Phone</label>
                          <input type="tel"  className="form-control" onChange = {(e) => setPhone(e.target.value)} placeholder="Enter Your Contact Number." required />
                        </div>
                        <div className="col-sm-6 form-group">
                          <label for="Time-Zone">Time-Zone</label>
                          <select className="form-control onChange = {(e) => setTimeZone(e.target.value)} custom-select browser-default">
                          <option data-time-zone-id="1" data-gmt-adjustment="GMT-12:00" data-use-daylight="0" value="-12">(GMT-12:00) International Date Line West</option>
                          <option data-time-zone-id="2" data-gmt-adjustment="GMT-11:00" data-use-daylight="0" value="-11">(GMT-11:00) Midway Island, Samoa</option>
                          <option data-time-zone-id="3" data-gmt-adjustment="GMT-10:00" data-use-daylight="0" value="-10" selected>(GMT-10:00) Hawaii</option>
                          <option data-time-zone-id="4" data-gmt-adjustment="GMT-09:00" data-use-daylight="1" value="-9">(GMT-09:00) Alaska</option>
                          <option data-time-zone-id="5" data-gmt-adjustment="GMT-08:00" data-use-daylight="1" value="-8">(GMT-08:00) Pacific Time (US & Canada)</option>
                          <option data-time-zone-id="81" data-gmt-adjustment="GMT+12:00" data-use-daylight="0" value="12">(GMT+12:00) Fiji, Kamchatka, Marshall Is.</option>
                          <option data-time-zone-id="82" data-gmt-adjustment="GMT+13:00" data-use-daylight="0" value="13">(GMT+13:00) Nuku'alofa</option>
                      </select>
                      </div>
          
                      
                          
                          <div className="col-sm-6 form-group">
                              <label for="Date">User Account Validity</label>
                              <div className="row">
                                  <div className="col-sm-6">
                                      <span><input type="checkbox" />&nbsp;&nbsp;&nbsp; Lifetime</span>
                                  </div>
                                  <div className="col-sm-6">
                                      <span><input type="checkbox"/>&nbsp;&nbsp;&nbsp; Custom</span>
                                  </div>
                              </div>
                           </div>
          
                           <div className="col-sm-6 form-group">
                              <label for="">User Account Type</label>
                              <select id="" onChange = {(e) => setUserAccountType(e.target.value)} className="form-control browser-default custom-select mb-3">
                                <option value="User">User</option>
                                <option value="Reseller">Reseller</option>
                              </select>
                            </div>
                       </div>
                  </div>
                </div>
          </div>

        </div>
      </div>
      
     
    </div>
    </div>
  </div>
  </div>

    {/* =============Step2================  */}
    <div className="container mt-3">
      <div>
      <div className="row jumbotron box8">
    <div className="accordion mb-3 mt-3" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseOne">
            Notification Details
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
         
          <div className="accordion-body">
              <div className="col-sm-12 form-group">
                  <div className="row">
                      <div className="col-sm-6 form-group">
                          <label for="tel">Invoice Email</label>
                          <input type="tel" onChange = {(e) => setInvoiceEmail(e.target.value)}  className="form-control"  placeholder="Enter Invoice Email" required />
                        </div>
                        <div className="col-sm-6 form-group">
                          <label for="tel">Account Email</label>
                          <input type="tel" onChange = {(e) => setAccountEmail(e.target.value)}  className="form-control"  placeholder="Enter Account Email" required />
                        </div>

                        <div className="col-sm-6 form-group">
                          <label for="tel">Price Update Email</label>
                          <input type="tel" onChange = {(e) => setPriceUpdateEmail(e.target.value)}  className="form-control"  placeholder="Enter Price Update Email" required />
                        </div>
                        <div className="col-sm-6 form-group">
                          <label for="tel">Technical Email</label>
                          <input type="tel" onChange = {(e) => setTechnicalEmail(e.target.value)}  className="form-control"  placeholder="Enter Technical Email" required />
                        </div>

                  </div>
               </div>
          </div>

        </div>
      </div>
      
     
    </div>
    </div>
  </div>
  </div>

  
   <div className="col-sm-12 mt-3 mb-3">
      <button className="btn btn-danger btnn" onClick={() =>setModal(true)}>Add New User</button>
    </div>
    </div>
  )
}

export default AddNewUser;