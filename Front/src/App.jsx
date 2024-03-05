
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormCorretor from "./pages/FormCorretor.jsx";
import FormLogin from "./pages/FormLogin.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import CardsPropiedades from "./pages/CardsPropiedades.jsx";
import FormUsuario from "./pages/FormUsuario.jsx";
import InmuebleFormPersona from "./pages/InmuebleFormPersona.jsx";
import FormBusquedaUser from "./pages/FormBusquedaUser.jsx";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { Inmuebles } from "./pages/Inmuebles.jsx";
import FormConstrutora from "./pages/FormConstrutora.jsx";
import Contacto from "./pages/Contacto.jsx";
import Nosotros from "./pages/Nosotros.jsx";
import { DetalleInmuebles } from "./pages/DetalleInmuebles.jsx";
import Administrador from "./pages/Administrador.jsx";
import AdmUsuario from "./pages/AdmUsuario.jsx";
import AdmCorredor from "./pages/AdmCorredor.jsx";
import AdmConstructora from "./pages/AdmConstructora.jsx";
import UserPass from "./pages/UserPass.jsx";
import CorredorPass from "./pages/CorredorPass.jsx";

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Inmuebles" element={<Inmuebles />} />
          <Route path="/DetalleInmuebles" element={<DetalleInmuebles />} />
          <Route path="/FormLogin" element={<FormLogin />} />
          <Route path="/FormUsuario" element={<FormUsuario />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/FormCorretor" element={<FormCorretor />} />
          <Route path="/FormConstrutora" element={<FormConstrutora />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/CardsPropiedades" element={<CardsPropiedades />} />
          <Route
            path="/InmuebleFormPersona"
            element={<InmuebleFormPersona />}
          />
          <Route path="/Administrador" element={<Administrador />} />
          <Route path="/FormBusquedaUser" element={<FormBusquedaUser />} />
          <Route path="/AdmUsuario" element={<AdmUsuario />} />
          <Route path="/AdmCorredor" element={<AdmCorredor />} />
          <Route path="/AdmConstructora" element={<AdmConstructora />} />
          <Route path="/UserPass" element={<UserPass />} />
          <Route path="/CorredorPass" element={<CorredorPass />} />
          <Route path="/ConstructoraPass" element={<CorredorPass />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

