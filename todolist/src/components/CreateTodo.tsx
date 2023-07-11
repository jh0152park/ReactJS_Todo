import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, todoState } from "../atoms";

interface IForm {
    todo: string;
}

function CreateTodo() {
    const { register, handleSubmit, setValue } = useForm<IForm>();
    const setTodoList = useSetRecoilState(todoState);
    const category = useRecoilValue(categoryState);

    const onSubmit = (data: IForm) => {
        setValue("todo", "");
        setTodoList((prev) => [
            {
                text: data.todo,
                category: category,
                id: Date.now(),
            },
            ...prev,
        ]);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                {...register("todo", {
                    required: "Please, let me know what you gonna do!",
                })}
                placeholder="Let me know what you gonna do."
            ></input>
            <button>Add</button>
        </form>
    );
}

export default CreateTodo;
