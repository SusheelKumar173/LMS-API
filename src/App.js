import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Header from './Header';
import {BrowserRouter,Route,Routes} from'react-router-dom'

import CreateEmployee from './Employee/CreateEmployee';
import DeleteEmployee from './Employee/DeleteEmployee';
import SearchEmployee from './Employee/SearchEmployee';
import UpdateEmployee from './Employee/UpdateEmployee';
import ShowAllEmployee from './Employee/ShowAllEmployee';
import Login from './Employee/Login';
import Title from './Title';
import Protected from './Protected';
import ManagerLogin from './Manager/ManagerLogin';
import Leave from './Employee/Leave';
import EmployeeDashBoard from './Employee/EmployeeDashBoard';
import MyProfile from './Employee/MyProfile';
import { ManagerShowAllEmployee } from './Manager/ManagerShowAllEmployee';
import ManagerShow from './Manager/ManagerShow';
import MyManager from './Employee/MyManager';
import MyLeave from './Employee/MyLeave';
import ManagerDashBoard from './Manager/ManagerDashboard';
import ManagerDashboard from './Manager/ManagerDashboard';
import Pending from './Manager/Pending';
import UpdateLeave from './Manager/UpdateLeave';
import UpdatePassword from './Employee/UpdatePassword';
import Approved from './Manager/Approved';
import ManagerProfile from './Manager/ManagerProfile';
import ManagerUpdateProfile from './Manager/ManagerUpdateProfile';
import ManagerUpdatePassword from './Manager/ManagerUpdatePassword';
import LeaveType from './Employee/LeaveType';


function App() {
  return (
  
    <div className="App">
    

     <BrowserRouter>
     

     <Routes>

     <Route path='/' element={<Title></Title>}></Route>
     <Route path='/show' element={<Protected Cmp={ManagerShow} />}></Route>
     <Route path='/create' element={<Protected Cmp={CreateEmployee} />}></Route>
     <Route path='/update' element={<Protected Cmp={UpdateEmployee} />}></Route>
     <Route path='/delete' element={<Protected Cmp={DeleteEmployee} />}></Route>
     <Route path='/search' element={<Protected Cmp={SearchEmployee} />}></Route>
     <Route path='/login' element={<Login></Login>}></Route>


     <Route path='/managerlogin' element={<ManagerLogin></ManagerLogin>}></Route>
     <Route path='/leave' element={<Protected Cmp={Leave} />}></Route>
     <Route path='/employeedashboard' element={<Protected Cmp={EmployeeDashBoard} />}></Route>
     <Route path='/myprofile' element={<Protected Cmp={MyProfile} />}></Route>  <Route path='/myleave' element={<Protected Cmp={MyLeave} />}></Route>
     <Route path='/managerdetails' element={<Protected Cmp={MyManager} />}></Route>
     <Route path='/myleave' element={<Protected Cmp={MyLeave} />}></Route>
   
     <Route path='/managerdashboard' element={<Protected Cmp={ManagerDashboard} />}></Route>
     <Route path='/pending' element={<Protected Cmp={Pending} />}></Route>
     <Route path='/updatestatus/:id' element={<Protected Cmp={UpdateLeave} />}></Route>
     <Route path='/changepassword' element={<Protected Cmp={UpdatePassword} />}></Route>
     <Route path='/approved' element={<Protected Cmp={Approved} />}></Route>
     <Route path='/managerprofile' element={<Protected Cmp={ManagerProfile} />}></Route>
     <Route path='/managerupdate' element={<Protected Cmp={ManagerUpdateProfile} />}></Route>
     <Route path='/managerchangepassword' element={<Protected Cmp={ManagerUpdatePassword} />}></Route>
     <Route path='/leavetype' element={<Protected Cmp={LeaveType} />}></Route>








     </Routes>

     </BrowserRouter>

    </div>

   
  );
}

export default App;
