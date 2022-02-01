import "./App.css"
import Home from "pages/Home"
import ModalTurn from "components/ModalTurn"
import { Routes, Route, useLocation } from "react-router-dom"
function App() {
  const { pathname } = useLocation()
  return (
    <div className="App">
      {pathname === "/turn" && <ModalTurn />}
      <Home />
    </div>
  )
}

export default App
