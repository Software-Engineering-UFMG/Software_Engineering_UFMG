import { Routes , Route } from "react-router";
import {Login} from "../src/pages/Login/index";
import Information  from "../src/pages/Information/index";
import Dashboard from "../src/pages/Dashboard/index";
import Registration from "./pages/Registration";
import Success from "./pages/Success";
import RegisterUserAsAdmin from "./pages/AdminAddUser";
import SuccessAdminAddUser from "./pages/SuccessAdminAddUser";
import EditUser from "./pages/AdminEditUser/EditUser";

function App() {
  return (
    
      <Routes>
        <Route index element={<Login />} />
        <Route path="/information" element={<Information/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/sucess" element={<Success/>}/>
        <Route path="/dashboard/addUserAsAdmin" element={<RegisterUserAsAdmin/>} />
        <Route path="/dashboard/addUserAsAdmin/successAdminAddUser" element={<SuccessAdminAddUser/>}/>
        <Route path="/dashboard/editUser/:userId" element={<EditUser />} />
      </Routes>
    
      
  );
}

export default App;
