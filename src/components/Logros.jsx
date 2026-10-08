import LikeButton from "./LikeButton";

const logros = [
  { numero: "01", titulo: "Copa del Mundo", texto: "Campeón con Argentina en Qatar 2022.", etiquetas: ["Selección", "2022"] },
  { numero: "02", titulo: "Balón de Oro", texto: "Ocho veces ganador del premio al mejor jugador del mundo.", etiquetas: ["Individual", "x8"] },
  { numero: "03", titulo: "Champions League", texto: "Cuatro títulos con el FC Barcelona.", etiquetas: ["Barcelona", "x4"] },
  { numero: "04", titulo: "Copa América", texto: "Campeón con Argentina en 2021 y 2024.", etiquetas: ["Selección", "2021", "2024"] },
];

function Logros() {
  return (
    <section id="logros" className="seccion">
      <div className="contenedor">
        <h2 className="titulo">Logros destacados</h2>
        <div className="tarjetas">
          {logros.map((l) => (
            <article className="tarjeta" key={l.numero}>
              <span className="periodo">LOGRO {l.numero}</span>
              <h3>{l.titulo}</h3>
              <p className="texto-suave">{l.texto}</p>
              <div className="etiquetas">
                {l.etiquetas.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <LikeButton />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Logros;
