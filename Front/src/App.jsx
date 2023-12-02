import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormUsuario from './pages/FormUsuario.jsx';
import FormLogin from "./pages/FormLogin.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/FormUsuario" element={<FormUsuario />} />
          <Route path="/FormLogin" element={<FormLogin />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
