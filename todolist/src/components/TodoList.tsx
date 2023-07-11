import { useRecoilState, useRecoilValue } from "recoil";
import { categoryState, todoSelector, todoState } from "../atoms";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";

function TodoList() {
    // const todoList = useRecoilValue(todoState);
    // const setTodoList = useSetRecoilState(todoState);

    const todo = useRecoilValue(todoSelector);
    const [category, setCategory] = useRecoilState(categoryState);
    const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
        setCategory(event.currentTarget.value);
    };

    console.log(category);

    return (
        <div>
            <h1>Todo Lists</h1>
            <hr></hr>

            <select value={category} onInput={onInput}>
                <option value="TO_DO">To Do</option>
                <option value="DOING">Doing</option>
                <option value="DONE">Done</option>
            </select>

            <CreateTodo></CreateTodo>

            {todo?.map((item) => (
                <Todo key={item.id} {...item}></Todo>
            ))}
        </div>
    );
}

export default TodoList;
