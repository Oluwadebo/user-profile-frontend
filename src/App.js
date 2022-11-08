import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./component/NotFound";
import Todo from "./component/Todo";
import Navbar from "./component/Navbar";
import Displaybackend from "./component/Displaybackend";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Displaybackend />} />
        <Route path="/Todo" element={<Todo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
