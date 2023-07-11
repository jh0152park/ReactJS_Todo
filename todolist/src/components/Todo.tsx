import { useSetRecoilState } from "recoil";
import { Categories, ITodo, todoState } from "../atoms";

function Todo({ text, category, id }: ITodo) {
    const setTodo = useSetRecoilState(todoState);

    const onClick = (ctg: Categories) => {
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
            {category !== Categories.DOING && (
                <button onClick={() => onClick(Categories.DOING)}>Doing</button>
            )}
            {category !== Categories.TO_DO && (
                <button onClick={() => onClick(Categories.TO_DO)}>To do</button>
            )}
            {category !== Categories.DONE && (
                <button onClick={() => onClick(Categories.DONE)}>Done</button>
            )}
        </li>
    );
}

export default Todo;
