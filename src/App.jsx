import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard} from "@/layouts";
import {SignIn, SignUp } from "@/pages/auth"


function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
      
      {/* <Route path="*" element={<Navigate to="/dashboard/home" replace />} /> */}
    </Routes>
  );
}

export default App;
