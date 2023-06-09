import React from 'react'
import ClientDetailList from './UserAdministration/ClientDetailList';
import ManageUserGroup from './UserAdministration/ManageUserGroup';

const Adminstration = () => {
  return (
    <div className="main">
     <ClientDetailList/>
     <ManageUserGroup/>
    </div>
  )
}

export default Adminstration;