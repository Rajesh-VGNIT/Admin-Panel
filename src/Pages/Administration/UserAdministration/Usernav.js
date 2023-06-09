import React from 'react'
import { NavLink } from 'react-router-dom';


const Usernav = () => {
  return (
    <div className="col-sm-12 b-2  m-3 form-group">
    <div className="row">
        <div className="col-sm-12 user">
          <ul>
          <NavLink to="/basicinfo"><li>Profile</li></NavLink>
          <NavLink to="/usersetting"><li>Settings</li></NavLink>
          <NavLink to="/activeservice"><li>Active Services</li></NavLink>
          <NavLink to="/senderid"><li>Sender ID</li></NavLink>
          <li>Templates</li>
          <li>Message Details</li>
          <li>Credits</li>
          <li>Filter</li>
          <li>MT-Routing</li>
          </ul>
         </div>
    </div>
 </div>
  )
}

export default Usernav;