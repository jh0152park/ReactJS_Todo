import { ITodo } from "../atoms";

function Todo({ text }: ITodo) {
    return (
        <li>
            <span>{text}</span>
            <button>Doing</button>
            <button>To do</button>
            <button>Done</button>
        </li>
    );
}

export default Todo;
