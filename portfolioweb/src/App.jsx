import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PortfolioPage from "./pages/PortfolioPage";

function App() {
  return (
    <>
      <Router>
        <div className="flex flex-col min-h-screen ">
          <Navbar />
          <div className="relative flex-grow ">
            <img
              src="https://img.freepik.com/foto-gratis/prueba-codigo-renderizado-3d-prueba-usabilidad-funcional_107791-16607.jpg?w=1380&t=st=1709143867~exp=1709144467~hmac=f8a7d8a8d927d4e1836d81537a148f2046349e27a6e340804032c080f33de847"
              alt="Tu Nombre"
              className="hidden sm:block absolute inset-0 w-full h-full object-cover bg-opacity-25"
            />
            <Routes>
              <Route exact path="/" element={<HomePage />} />

              <Route exact path="/about" element={<AboutPage />} />
              <Route exact path="/contact" element={<ContactPage />} />
              <Route exact path="/portfolio" element={<PortfolioPage />} />

              {/* <Route path="*"  element={<NotFoundPage/>} /> */}
              {/* Agrega más rutas aquí si es necesario */}
            </Routes>
          </div>

          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
