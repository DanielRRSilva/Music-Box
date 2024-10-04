import api from "./api"
import { useState } from "react"
import "./utils/globals.css"
import Rotas from "./routes"
import {ToastContainer} from "react-toastify"
import "./utils/globals.js"

function App() {
  return (
    <>
      <Rotas/>
      <ToastContainer/>
    </>
  )
}

export default App;
