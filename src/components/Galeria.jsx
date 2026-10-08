import { useState } from "react";
import messi from "../assets/messi.webp";
import foto1 from "../assets/galeria/foto1.jpg";
import foto2 from "../assets/galeria/foto2.jpg";
import foto3 from "../assets/galeria/foto3.jpg";

const fotos = [messi, foto1, foto2, foto3];

function Galeria() {
  const [abierta, setAbierta] = useState(null);

  return (
    <section id="galeria" className="seccion gris">
      <div className="contenedor">
        <h2 className="titulo">Galería</h2>
        <div className="fotos">
          {fotos.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Lionel Messi ${i + 1}`}
              onClick={() => setAbierta(src)}
            />
          ))}
        </div>
      </div>

      {abierta && (
        <div className="visor" onClick={() => setAbierta(null)}>
          <img src={abierta} alt="Foto ampliada" />
          <span className="cerrar">×</span>
        </div>
      )}
    </section>
  );
}

export default Galeria;
