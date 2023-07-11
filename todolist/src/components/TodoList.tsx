import { useRecoilValue } from "recoil";
import { todoSelector, todoState } from "../atoms";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";

function TodoList() {
    // const todoList = useRecoilValue(todoState);
    // const setTodoList = useSetRecoilState(todoState);
    const todoList = useRecoilValue(todoState);
    const [todo, doing, done] = useRecoilValue(todoSelector);

    return (
        <div>
            <h1>Todo Lists</h1>
            <hr></hr>
            <CreateTodo></CreateTodo>

            <h2>Todo</h2>
            <ul>
                {todo.map((item) => (
                    <Todo key={item.id} {...item}></Todo>
                ))}
            </ul>
            <hr></hr>

            <h2>Doing</h2>
            <ul>
                {doing.map((item) => (
                    <Todo key={item.id} {...item}></Todo>
                ))}
            </ul>
            <hr></hr>

            <h2>Done</h2>
            <ul>
                {done.map((item) => (
                    <Todo key={item.id} {...item}></Todo>
                ))}
            </ul>
            <hr></hr>
        </div>
    );
}

export default TodoList;
