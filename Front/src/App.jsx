import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormCorretor from './pages/FormCorretor.jsx';
import FormLogin from "./pages/FormLogin.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/FormCorretor" element={<FormCorretor />} />
          <Route path="/FormLogin" element={<FormLogin />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
