import "./App.css";
import Footer from "./components/Footer";
import { Navbar } from "./components/Header/Navbar";
import { Inmuebles } from "./components/Main/Inmuebles";




function App() {
  return (
    <div>
     
      <Navbar/>
      <Inmuebles/>
      <Footer />

    </div>
  );
}

export default App;
