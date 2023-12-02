import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormUsuario from './pages/FormUsuario.jsx';
import Home from "./pages/Home.jsx";

function App() {
  return (
    <>
      <Router>
        {/*aca va  el <Navbar/>*/}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/FormUsuario" element={<FormUsuario />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
