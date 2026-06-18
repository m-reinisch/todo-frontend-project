import type {Todo} from "./types.tsx";

type TodoProps= {
    todo: Todo
}

export default function TodoCard(props: Readonly<TodoProps>) {
    return(
        <>
            <p id="desc">{props.todo.description}</p>
            <p id="stat">{props.todo.status}</p>
        </>
    )
}