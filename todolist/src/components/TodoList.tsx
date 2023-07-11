import { useRecoilValue } from "recoil";
import { todoState } from "../atoms";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";

function TodoList() {
    // const todoList = useRecoilValue(todoState);
    // const setTodoList = useSetRecoilState(todoState);
    const todoList = useRecoilValue(todoState);

    console.log(todoList);
    return (
        <div>
            <h1>Todo Lists</h1>
            <hr></hr>
            <CreateTodo></CreateTodo>
            <ul>
                {todoList.map((item) => (
                    <Todo key={item.id} {...item}></Todo>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
