import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import FormUsuario from './pages/FormUsuario.jsx';

function App() {
  return (
    <>
      <Router>
        {/*aca va  el <Navbar/>*/}
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/FormUsuario" element={<FormUsuario />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
