import { useState } from "react"
import { createPortal } from "react-dom"
import { Link } from "react-router-dom"
import { useLocation } from "wouter"
import "./styles.css"
const urls = {
  localhost: "http://localhost:3001",
  heroku: "https://api-barber-1.herokuapp.com",
}

function Modal({ children }) {
  return (
    <div className={`back-modal `}>
      <div className="modal">
        <header>
          <Link
            className="button"
            style={{ fontWeight: 999, fontSize: "16px" }}
            to="/"
          >
            x
          </Link>
        </header>
        {children}
      </div>
    </div>
  )
}

export default function ModalTurn() {
  const [date, setDate] = useState(new Date())
  const [time, setTime] = useState("08:00")
  const [, navigate] = useLocation()
  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`${urls.heroku}/item`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: "corte", price: 100, quantity: 1 }),
    })
      .then((res) => res.json())
      .then(({ url }) => window.location.replace(url))
      .catch((err) => console.log(err))
  }

  return createPortal(
    <Modal>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre y apellido</label>
        <input type="text" name="name" />
        <label htmlFor="date">Fecha</label>
        <input type="date" name="date" />
        <label htmlFor="time">Hora</label>
        <input type="time" name="time" />
        <button className="button">Tomar Turno</button>
      </form>
    </Modal>,
    document.getElementById("modal-root")
  )
}
