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

// type IFormData = {
//     errors: {
//         email: {
//             message: string;
//         };
//     };
//     firstName: string;
//     lastName: string;
//     userName: string;
//     email: string;
//     password: string;
//     passwordConfirm: string;
// };

interface IForm {
    email: string;
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
    passwordConfirm: string;
}

function TodoList() {
    const {
        register,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm<IForm>({
        defaultValues: {
            email: "...@naver.com",
        },
    });

    const onValid = (data: IForm) => {
        console.log(data);
    };

    return (
        <div>
            <form
                style={{ display: "flex", flexDirection: "column" }}
                onSubmit={handleSubmit(onValid)}
            >
                <input
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[A-Za-z0-9._%+-]+@NavigationPreloadManager.com$/,
                            message: "Only @naver.com eamil allow",
                        },
                    })}
                    placeholder="Email"
                ></input>
                <span>{errors?.email?.message as string}</span>

                <input
                    {...register("firstName", {
                        required: "First Name is required",
                    })}
                    placeholder="First Name"
                ></input>
                <span>{errors?.firstName?.message as string}</span>

                <input
                    {...register("lastName", {
                        required: "Last Name is required",
                    })}
                    placeholder="Last Name"
                ></input>
                <span>{errors?.lastName?.message as string}</span>

                <input
                    {...register("userName", {
                        required: "User Name is required",
                        minLength: {
                            value: 10,
                            message: "User Name must be at least 10 characters",
                        },
                    })}
                    placeholder="User Name"
                ></input>
                <span>{errors?.userName?.message as string}</span>

                <input
                    {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 10,
                            message: "Password must be at least 10 characters",
                        },
                    })}
                    placeholder="Password"
                ></input>
                <span>{errors?.password?.message as string}</span>

                <input
                    {...register("passwordConfirm", {
                        required: "Password is required",
                        minLength: {
                            value: 10,
                            message: "Password must be at least 10 characters",
                        },
                    })}
                    placeholder="Password Confirm"
                ></input>
                <span>{errors?.passwordConfirm?.message as string}</span>

                <button>Add</button>
            </form>
        </div>
    );
}

export default TodoList;
