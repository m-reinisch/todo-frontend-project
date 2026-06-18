import './App.css'
import type {Todo} from "./types.tsx";
import NavBar from "./NavBar.tsx";
import Home from "./Home.tsx";
import Canvas from "./Canvas.tsx";
import {Route, Routes } from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import NewTodo from "./NewTodo.tsx";

function App() {
    const [todos, setTodos]= useState<Todo[]>([])

    function loadAllTodos(){
        axios.get("/api/todo")
             .then( (response) =>
                 setTodos(response.data))
             .catch( (errors) => console.log(errors) )
    }
    function addTodo(desc: string, stat: string){
        console.log(desc + ", " + stat)
    }

    useEffect(() => {
        loadAllTodos()
    }, []);

    return (
    <>
        <header>
            <h1>Todo-App</h1>
            <NavBar />
        </header>
        <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/todos"} element={<Canvas cTodos={todos} />} />
            <Route path={"/todo/add"}
                   element={<NewTodo submitTodo={addTodo} />} />
        </Routes>
    </>
    )
}

export default App
