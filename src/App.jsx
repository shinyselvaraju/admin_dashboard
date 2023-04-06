import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard} from "@/layouts";
import ContactForm from "./pages/auth/form";
import ContactForm2 from "./pages/auth/form_2";
import ContactForm3 from "./pages/auth/form_3";
import ContactForm4 from "./pages/auth/form_4";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ContactForm />} />
      <Route path="/streamlineregistration" element={<ContactForm2 />} />
      <Route path="/sendsquaredregistration" element={<ContactForm3 />} />
      <Route path="/highlevelregistration" element={<ContactForm4 />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
      
      {/* <Route path="*" element={<Navigate to="/dashboard/home" replace />} /> */}
    </Routes>
  );
}

export default App;
