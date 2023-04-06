import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard} from "@/layouts";
import { ContactForm, ContactForm2, ContactForm3, ContactForm4, SignIn, SignUp } from "@/pages/auth"


function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/registration" element={<ContactForm />} />
      <Route path="/streamlineregistration" element={<ContactForm2 />} />
      <Route path="/sendsquaredregistration" element={<ContactForm3 />} />
      <Route path="/highlevelregistration" element={<ContactForm4 />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
      
      {/* <Route path="*" element={<Navigate to="/dashboard/home" replace />} /> */}
    </Routes>
  );
}

export default App;
