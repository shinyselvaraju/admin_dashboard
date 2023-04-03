import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard} from "@/layouts";
import ContactForm from "./pages/auth/form";
import ContactForm2 from "./pages/auth/form_2";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ContactForm />} />
      <Route path="/registration" element={<ContactForm2 />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
      
      {/* <Route path="*" element={<Navigate to="/dashboard/home" replace />} /> */}
    </Routes>
  );
}

export default App;
