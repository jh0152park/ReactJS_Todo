import { useSetRecoilState } from "recoil";
import { ITodo, todoState } from "../atoms";

function Todo({ text, category, id }: ITodo) {
    const setTodo = useSetRecoilState(todoState);
    const onClick = (ctg: ITodo["category"]) => {};

    return (
        <li>
            <span>{text}</span>
            {category !== "DOING" && (
                <button onClick={() => onClick("DOING")}>Doing</button>
            )}
            {category !== "TO_DO" && (
                <button onClick={() => onClick("TO_DO")}>To do</button>
            )}
            {category !== "DONE" && (
                <button onClick={() => onClick("DONE")}>Done</button>
            )}
        </li>
    );
}

export default Todo;
