import "./App.css";
import { Routes, Route,Navigate } from "react-router-dom";
import Signup from "./component/Signup";
import NotFound from "./component/NotFound";
import Signin from "./component/Signin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Signup" element={<Navigate to="/" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
