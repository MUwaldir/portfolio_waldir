import "./App.css";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <div className="relative flex ">
      {/* Navbar */}
      <Navbar className="fixed top-0 left-0 w-full z-10" />
      {/* Dashboard con margen superior para dejar espacio para el Navbar */}
    
      <div className=" w-full">
        <Dashboard />
      </div>
    </div>
    </>
  );
}

export default App;
