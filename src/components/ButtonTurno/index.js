import { Link } from "react-router-dom"
import "./index.css"

export default function ButtonTurno() {
  return (
    <Link className="Button-Turno" to={"/turn"}>
      <span className="iconify" data-icon="ant-design:star-filled"></span>
      <span>TURNOS</span>
      <span className="iconify" data-icon="ant-design:star-filled"></span>
    </Link>
  )
}
