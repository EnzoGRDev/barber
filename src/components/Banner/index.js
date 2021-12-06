import logo from 'assets/logo-barberia.png'
import ButtonTurno from 'components/ButtonTurno'
import 'components/Banner/index.css'

export default function Banner (){
  return(
    <div className="Banner">
      <img src={logo} alt="logo" className="logo"/>
      <nav className="Banner-nav">
      <ul className="Banner-nav_items">
      <li>Inicio</li>
      <li>Servicios</li>
      <li>Sedes</li>
      <li>Contacto</li>
      </ul>
      </nav>
    </div>
  )
}