function Perfil() {
  return (
    <section id="perfil" className="seccion">
      <div className="contenedor">
        <h2 className="titulo">Perfil</h2>
        <div className="dos-columnas">
          <div>
            <p className="destacado">
              Considerado uno de los mejores futbolistas de todos los tiempos.
            </p>
            <p className="texto-suave">
              Messi comenzó jugando en Newell's Old Boys y a los 13 años se mudó
              a Barcelona, donde debutó en el primer equipo y se convirtió en el
              máximo goleador de la historia del club.
            </p>
          </div>
          <div className="datos">
            <div>
              <span>Nombre completo</span>
              <p>Lionel Andrés Messi Cuccittini</p>
            </div>
            <div>
              <span>Nacimiento</span>
              <p>24 de junio de 1987, Rosario, Argentina</p>
            </div>
            <div>
              <span>Posición</span>
              <p>Delantero</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Perfil;
