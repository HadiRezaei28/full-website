import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/" element={<Navigate to="/signup" />}/>
      </Routes>
    </div>
  );
}

export default App;
