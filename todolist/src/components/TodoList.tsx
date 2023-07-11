import { useForm } from "react-hook-form";
import {
    atom,
    useRecoilState,
    useRecoilValue,
    useSetRecoilState,
} from "recoil";

interface IForm {
    todo: string;
}

interface ITodo {
    text: string;
    id: number;
    category: "TO_DO" | "DOING" | "DONE";
}

const todoState = atom<ITodo[]>({
    key: "todo",
    default: [],
});

function TodoList() {
    // const todoList = useRecoilValue(todoState);
    // const setTodoList = useSetRecoilState(todoState);
    const [todoList, setTodoList] = useRecoilState(todoState);
    const { register, handleSubmit, setValue } = useForm<IForm>();

    const onSubmit = (data: IForm) => {
        setValue("todo", "");
        setTodoList((prev) => [
            {
                text: data.todo,
                category: "TO_DO",
                id: Date.now(),
            },
            ...prev,
        ]);
    };

    return (
        <div>
            <h1>Todo Lists</h1>
            <hr></hr>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("todo", {
                        required: "Please, let me know what you gonna do!",
                    })}
                    placeholder="Let me know what you gonna do."
                ></input>
                <button>Add</button>
            </form>
            <ul>
                {todoList.map((item) => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
