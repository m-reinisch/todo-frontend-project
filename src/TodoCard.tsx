import type {Todo} from "./types.tsx";
import axios from "axios";

type TodoProps= {
    todo: Todo,
    change: () => void
}

export default function TodoCard(props: Readonly<TodoProps>) {
    function levelUp(data: Todo){
        const level: string= data.status
        let stat: string= "OPEN"

        if (level === "OPEN"){
            stat= "IN_PROGRESS"
        } else if (level === "IN_PROGRESS"){
            stat= "DONE"
        }
        const upTodo: Todo= {
            id: data.id,
            description: data.description,
            status: stat
        }
        axios.put("/api/todo/" + data.id, upTodo)
             .then( () => props.change() )
             .catch( (errors) => console.log(errors) )
    }

    return(
        <div id="card">
            <p id="desc">{props.todo.description}</p>
            <p id="stat">{props.todo.status}</p>
            <button onClick={
                () => levelUp(props.todo)
            }>Level up</button>
        </div>
    )
}