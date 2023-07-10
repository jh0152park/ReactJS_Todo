import { useForm } from "react-hook-form";

interface IForm {
    todo: string;
}

function TodoList() {
    const { register, handleSubmit, setValue } = useForm<IForm>();

    const onSubmit = (data: IForm) => {
        console.log(data.todo);
        setValue("todo", "");
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("todo", {
                        required: "Please, let me know what you gonna do!",
                    })}
                    placeholder="Let me know what you gonna do."
                ></input>
                <button>Add</button>
            </form>
        </div>
    );
}

export default TodoList;
