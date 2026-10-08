import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import DatosPersonales from "./components/DatosPersonales";
import Biografia from "./components/Biografia";
import Logros from "./components/Logros";
import Galeria from "./components/Galeria";
import LikeButton from "./components/LikeButton";
import Footer from "./components/Footer";

function App() {
  const [verLogros, setVerLogros] = useState(true);

  return (
    <>
      <Header />
      <main>
        <LikeButton />
        <DatosPersonales />
        <Biografia />
        <div className="botones">
          <button className="btn" onClick={() => setVerLogros(!verLogros)}>
            {verLogros ? "Ocultar logros" : "Mostrar logros"}
          </button>
        </div>
        {verLogros && <Logros />}
        <Galeria />
      </main>
      <Footer />
    </>
  );
}

export default App;
