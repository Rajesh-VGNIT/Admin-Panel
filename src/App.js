import Sidebar from './Layouts/Sidebar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from './Pages/Home/Home';
import UserManagement from './Pages/Administration/UserAdministration/UserManagement';
import AddNewUser from './Pages/Administration/UserAdministration/AddNewUser';
import SiteUserTreeList from './Pages/Administration/UserAdministration/SiteUserTreeList';
import ManageUserGroup from './Pages/Administration/UserAdministration/ManageUserGroup';
import ClientDetailList from './Pages/Administration/UserAdministration/ClientDetailList';
import ClientTransactions from './Pages/Administration/UserAdministration/ClientTransactions';
import RollBackTransaction from './Pages/Administration/UserAdministration/RollBackTransaction';
import AllSenderIdRequest from './Pages/Administration/Approvals/AllSenderIdRequest';
import AllTemplateReqest from './Pages/Administration/Approvals/AllTemplateReqest';
import Blacklistnumbers from './Pages/Administration/Settings/Blacklistnumbers';
import Globalspamkeywords from './Pages/Administration/Settings/Globalspamkeywords';
import Userspamkeywords from './Pages/Administration/Settings/Userspamkeywords';
import Sitebranding from './Pages/Administration/Settings/Sitebranding';
import ManageNotification from './Pages/Administration/Settings/ManageNotification';
import ManageEmail from './Pages/Administration/Settings/ManageEmail';
import ChangePassword from './Pages/Administration/Settings/ChangePassword';
import ManageGeneralSetting from './Pages/Administration/General Setting/ManageGeneralSetting';
import ForcePasswordChange from './Pages/Administration/General Setting/ForcePasswordChange';
import ForceLockDown from './Pages/Administration/General Setting/ForceLockDown';
import Basicinfo from './Pages/Administration/UserAdministration/UserNav Pages/ProfileNav/Basicinfo';
import UserSetting from './Pages/Administration/UserAdministration/UserNav Pages/ProfileNav/UserSetting';
import Login from './Auth/login';
import Register from './Auth/Register';
import ForgetPassword from './Auth/ForgetPassword';
import ActiveService from './Pages/Administration/UserAdministration/UserNav Pages/ProfileNav/ActiveService';
import SenderId from './Pages/Administration/UserAdministration/UserNav Pages/ProfileNav/SenderId ';


function App() {
  return (
    <div className="main">
    <BrowserRouter>
   
     <Routes>
     
      
         <Route path="/" element={<Login/>}/>
         <Route path="/sidebar" element={<Sidebar/>}/>
         <Route path="/userManagement" element={<UserManagement/>}/>
         <Route path="/addnewuser" element={<AddNewUser/>}/>
         <Route path="/siteusertreelist" element={<SiteUserTreeList/>}/>
         <Route path="/manageusergroup" element={<ManageUserGroup/>}/>
         <Route path="/clientdetaillist" element={<ClientDetailList/>}/>
         <Route path="/clienttransactions" element={<ClientTransactions/>}/>
         <Route path="/rollbacktransation" element={<RollBackTransaction/>}/>y
         <Route path="/allsenderidrequest" element={<AllSenderIdRequest/>}/>
         <Route path="/alltemplaterequest" element={<AllTemplateReqest/>}/>
         <Route path="/blacklistnumbers" element={<Blacklistnumbers/>}/>
         <Route path="/globalspamkeywords" element={<Globalspamkeywords/>}/>
         <Route path="/userspamkeywords" element={<Userspamkeywords/>}/>
         <Route path="/sitebranding" element={<Sitebranding/>}/>
         <Route path="/managenotification" element={<ManageNotification/>}/>
         <Route path="/manageemail" element={<ManageEmail/>}/>
         <Route path="/changepassword" element={<ChangePassword/>}/>
         <Route path="/managegeneralsetting" element={<ManageGeneralSetting/>}/>
         <Route path="/forcepasswordchange" element={<ForcePasswordChange/>}/>
         <Route path="/forclockdown" element={<ForceLockDown/>}/>
         <Route path="/basicinfo" element={<Basicinfo/>}/>
         <Route path="/usersetting" element={<UserSetting/>}/>
         <Route path="/activeService" element={<ActiveService/>}/>
         <Route path="/senderid" element={<SenderId/>}/> 
        <Route path="/login" element={<Login/>}/>
         <Route path="/register" element={<Register/>}/>
         <Route path="/forgetpassword" element={<ForgetPassword/>}/> 
         </Routes>
    </BrowserRouter>

    </div>
  )
}

export default App
