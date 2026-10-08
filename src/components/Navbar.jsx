const enlaces = [
  { id: "perfil", texto: "Perfil" },
  { id: "trayectoria", texto: "Trayectoria" },
  { id: "logros", texto: "Logros" },
  { id: "galeria", texto: "Galería" },
];

function Navbar() {
  return (
    <nav className="navbar">
      {enlaces.map((e) => (
        <a key={e.id} href={`#${e.id}`}>
          {e.texto}
        </a>
      ))}
    </nav>
  );
}

export default Navbar;
