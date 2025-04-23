import { Routes, Route } from "react-router";
import { Login } from "../src/pages/Login/index";
import Information from "../src/pages/Information/index";
import Dashboard from "../src/pages/Dashboard/index";
import Registration from "./pages/Registration";
import Success from "./pages/Success";
import RegisterUserAsAdmin from "./pages/AdminAddUser";
import SuccessAdminAddUser from "./pages/SuccessAdminAddUser";
import EditUser from "./pages/AdminEditUser/EditUser";
import Preceptor from "./pages/PreceptorSelectionAssistencial";
import Edit from "./pages/EditRegistration";
import { NIRMainpage } from "./pages/NIRMainPage";
import EditNir from "./pages/EditRegistrationNIR";
import QuestionnairePage from "./pages/Questionnaire/index"

function App() {
  return (

    <Routes>
      <Route index element={<Login />} />
      <Route path="/information" element={<Information />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/NIRMainpage" element={<NIRMainpage />} />
      <Route path="/NIRMainpage/editNir" element={<EditNir />} />
      <Route path="/preceptor" element={<Preceptor />} />
      <Route path="/preceptor/editRegistration" element={<Edit />}></Route>
      <Route path="/registration" element={<Registration />} />
      <Route path="/sucess" element={<Success />} />
      <Route path="/dashboard/addUserAsAdmin" element={<RegisterUserAsAdmin />} />
      <Route path="/dashboard/addUserAsAdmin/successAdminAddUser" element={<SuccessAdminAddUser />} />
      <Route path="/dashboard/editUser/:userId" element={<EditUser />} />
      <Route path="/questionnaire" element={<QuestionnairePage />} />
    </Routes>


  );
}

export default App;
