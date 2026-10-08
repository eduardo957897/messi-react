import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Estadisticas from "./components/Estadisticas";
import Perfil from "./components/Perfil";
import Trayectoria from "./components/Trayectoria";
import Logros from "./components/Logros";
import Galeria from "./components/Galeria";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Estadisticas />
      <main>
        <Perfil />
        <Trayectoria />
        <Logros />
        <Galeria />
      </main>
      <Footer />
    </>
  );
}

export default App;
