import type {Todo} from "./types.tsx";
import TodoCard from "./TodoCard.tsx";

type CanvasProps= {
    cTodos: Todo[]
}

export default function Canvas(props: Readonly<CanvasProps>) {
    return(
        <>
            <table>
                <thead>
                <tr>
                    <th>Open:</th>
                    <th>In progress:</th>
                    <th>Finished:</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        {props.cTodos
                            .filter(t =>
                                t.status === "OPEN")
                            .map(t =>
                                <TodoCard todo={t} />)
                        }
                    </td>
                    <td>
                        {props.cTodos
                            .filter(t =>
                                t.status === "IN_PROGRESS")
                            .map(t =>
                                <TodoCard todo={t} />)
                        }
                    </td>
                    <td>
                        {props.cTodos
                            .filter(t =>
                                t.status === "DONE")
                            .map(t =>
                                <TodoCard todo={t} />)
                        }
                    </td>
                </tr>
                </tbody>
            </table>
        </>
    )
}