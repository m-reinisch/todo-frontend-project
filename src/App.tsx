import './App.css'
import NavBar from "./NavBar.tsx";
import Home from "./Home.tsx";
import Canvas from "./Canvas.tsx";
import {Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
        <header>
            <h1>Todo-App</h1>
            <NavBar />
        </header>
        <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/todos"} element={<Canvas />} />
        </Routes>
    </>
  )
}

export default App
