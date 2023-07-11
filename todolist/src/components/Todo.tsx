import { useSetRecoilState } from "recoil";
import { ITodo, todoState } from "../atoms";

function Todo({ text, category, id }: ITodo) {
    const setTodo = useSetRecoilState(todoState);

    const onClick = (ctg: ITodo["category"]) => {
        setTodo((prev) => {
            const target = prev.findIndex((todo) => todo.id === id);
            const newTodo = { text, id, category: ctg as any };

            // return [
            //     ...prev.slice(0, target),
            //     newTodo,
            //     ...prev.slice(target + 1),
            // ];

            return prev.map((item) =>
                item.id === id ? { text: text, id: id, category: ctg } : item
            );
        });
    };

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
