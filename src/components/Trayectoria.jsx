const etapas = [
  { periodo: "Inferiores", club: "Newell's Old Boys", texto: "Sus primeros pasos en el fútbol, en Rosario." },
  { periodo: "2004 - 2021", club: "FC Barcelona", texto: "Debutó en el primer equipo y ganó 4 Champions League." },
  { periodo: "2021 - 2023", club: "Paris Saint-Germain", texto: "Dos temporadas en el fútbol francés." },
  { periodo: "2023 - Presente", club: "Inter Miami", texto: "Su etapa actual en la MLS." },
];

function Trayectoria() {
  return (
    <section id="trayectoria" className="seccion gris">
      <div className="contenedor">
        <h2 className="titulo">Trayectoria</h2>
        <div className="linea">
          {etapas.map((e) => (
            <div className="etapa" key={e.club}>
              <span className="periodo">{e.periodo}</span>
              <h3>{e.club}</h3>
              <p className="texto-suave">{e.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trayectoria;
