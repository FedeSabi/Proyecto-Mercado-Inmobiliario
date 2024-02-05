import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormCorretor from './pages/FormCorretor.jsx';
import FormLogin from "./pages/FormLogin.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import CardsPropiedades from "./pages/CardsPropiedades.jsx";
import FormUsuario from "./pages/FormUsuario.jsx";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { Inmuebles } from "./pages/Inmuebles.jsx";




function App() {
  return (
    <>
      <Router>
       
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/Inmuebles" element={<Inmuebles />} />
          <Route path="/FormLogin" element={<FormLogin />} />
          <Route path="/FormUsuario" element={<FormUsuario />} />
          <Route path="/FormCorretor" element={<FormCorretor />} />
          <Route path="/CardsPropiedades" element={<CardsPropiedades />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
