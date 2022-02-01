import logo from "assets/logo-barberia.png"
import ButtonTurno from "components/ButtonTurno"
import "components/Banner/index.css"

export default function Banner() {
  return (
    <div className="Banner" id="Inicio">
      <img src={logo} alt="logo" className="logo" />
      <nav className="Banner-nav">
        <ul className="Banner-nav_items">
          <li>
            <a href="#Inicio">Inicio</a>
            <span></span>{" "}
          </li>
          <li>
            <a href="#Servicios">Servicios</a>
            <span></span>{" "}
          </li>
          <li>
            <a href="#Sedes">Sedes</a> <span></span>{" "}
          </li>
          <li>
            <a href="#Contacto">Contacto</a> <span></span>{" "}
          </li>
          <ButtonTurno />
        </ul>
      </nav>
    </div>
  )
}
