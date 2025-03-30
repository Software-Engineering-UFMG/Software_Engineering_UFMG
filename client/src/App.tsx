import { Routes , Route } from "react-router";
import {Login} from "../src/pages/Login/index";
import Information  from "../src/pages/Information/index";
import Dashboard from "../src/pages/Dashboard/index";
import Registration from "./pages/Registration";
import Success from "./pages/Success";

function App() {
  return (
    
      <Routes>
        <Route index element={<Login />} />
        <Route path="/information" element={<Information/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/success" element={<Success/>}/>

      </Routes>
    
      
  );
}

export default App;
