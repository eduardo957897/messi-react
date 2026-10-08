import messi from "../assets/messi.webp";

function Hero() {
  return (
    <header className="hero">
      <div className="hero-contenido">
        <div>
          <p className="etiqueta">Perfil deportivo</p>
          <h1>Lionel Messi</h1>
          <p className="subtitulo">
            Delantero argentino, campeón del mundo y ocho veces Balón de Oro.
          </p>
          <div className="hero-botones">
            <a className="btn btn-claro" href="#logros">Ver logros</a>
            <a className="btn btn-borde" href="#galeria">Galería</a>
          </div>
        </div>
        <img className="avatar" src={messi} alt="Lionel Messi" />
      </div>
    </header>
  );
}

export default Hero;
