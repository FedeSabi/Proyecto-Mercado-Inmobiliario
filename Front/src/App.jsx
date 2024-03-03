
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
import AdmUsuario from "./administrador/AdmUsuario.jsx";
import AdmCorredor from "./administrador/AdmCorredor.jsx";
import AdmConstructora from "./administrador/AdmConstructora.jsx";
//import ProtectedRoute from "./components/ProtectedRoute.jsx";
import { useLocalStorage } from 'react-use'

function App() {
// creamos un hook para que si esta registrado pueda acceder a las secciones protegidas!!
const [token] = useLocalStorage('token')
if (token === true) {
  // Haz algo con el token aquí, por ejemplo, mostrarlo o utilizarlo en alguna lógica
  console.log('El token es verdadero:', token);
} else {
  // Si el token no es true, puedes manejarlo de acuerdo a tus necesidades,
  // como mostrar un mensaje de error o ejecutar alguna otra lógica
  console.log('El token no es verdadero:', token);
}
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
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;

