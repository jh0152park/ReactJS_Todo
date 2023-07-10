import { useState } from "react";
import { useForm } from "react-hook-form";

// function TodoList() {
//     const [todo, setTodo] = useState("");
//     const [todoError, setTodoError] = useState("");

//     const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//         const {
//             currentTarget: { value },
//         } = event;
//         setTodo(value);
//     };

//     const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();

//         if (todo.length < 10) {
//             setTodoError("todo is have to be longer than 10");
//         }
//         console.log("submit");
//     };

//     return (
//         <div>
//             <form onSubmit={onSubmit}>
//                 <input
//                     onChange={onChange}
//                     value={todo}
//                     placeholder="Let me know what you gonna do."
//                 ></input>
//                 <button>Add</button>
//                 {todoError !== "" ? todoError : null}
//             </form>
//         </div>
//     );
// }

function TodoList() {
    const { register, watch, handleSubmit, formState } = useForm();

    const onValid = (data: any) => {
        console.log(data);
    };

    console.log(formState.errors);

    return (
        <div>
            <form
                style={{ display: "flex", flexDirection: "column" }}
                onSubmit={handleSubmit(onValid)}
            >
                <input
                    {...register("email", { required: true })}
                    placeholder="Email"
                ></input>
                <input
                    {...register("firstName", { required: true })}
                    placeholder="First Name"
                ></input>
                <input
                    {...register("lastName", { required: true })}
                    placeholder="Last Name"
                ></input>
                <input
                    {...register("userName", { required: true, minLength: 10 })}
                    placeholder="User Name"
                ></input>
                <input
                    {...register("password", { required: true, minLength: 10 })}
                    placeholder="Password"
                ></input>
                <input
                    {...register("passwordConfirm", {
                        required: true,
                        minLength: 10,
                    })}
                    placeholder="Password Confirm"
                ></input>
                <button>Add</button>
            </form>
        </div>
    );
}

export default TodoList;
