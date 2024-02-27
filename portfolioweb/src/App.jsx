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
          <Routes>
            <Route exact path="/" element={<HomePage />} />

            <Route exact path="/about" element={<AboutPage />} />
            <Route exact path="/contact" element={<ContactPage />} />
            <Route exact path="/portfolio" element={<PortfolioPage />} />

            {/* <Route path="*"  element={<NotFoundPage/>} /> */}
            {/* Agrega más rutas aquí si es necesario */}
          </Routes>

          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
