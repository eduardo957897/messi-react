const datos = [
  { numero: "1987", texto: "Año de nacimiento" },
  { numero: "10", texto: "Dorsal icónico" },
  { numero: "3", texto: "Clubes" },
  { numero: "8", texto: "Balones de Oro" },
];

function Estadisticas() {
  return (
    <div className="estadisticas">
      {datos.map((d) => (
        <div className="dato" key={d.texto}>
          <span className="dato-numero">{d.numero}</span>
          <span className="dato-texto">{d.texto}</span>
        </div>
      ))}
    </div>
  );
}

export default Estadisticas;
