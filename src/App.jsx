import { Routes, Route } from "react-router";
import Dashboard from "./pages/dashboard/dashboard";
import Home from "./pages/home/home";
import "./App.css";
import PrivateRoute from "./components/privateRoute";


function App() {
  return (

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="*" element={<h1> page not found!!!</h1>} />
      </Routes>
  
  );
}

export default App;
