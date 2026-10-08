import "./App.css";
import Header from "./components/Header";
import DatosPersonales from "./components/DatosPersonales";
import Biografia from "./components/Biografia";
import Logros from "./components/Logros";
import Galeria from "./components/Galeria";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <DatosPersonales />
        <Biografia />
        <Logros />
        <Galeria />
      </main>
      <Footer />
    </>
  );
}

export default App;
