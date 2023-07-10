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
    const { register, watch } = useForm();
    console.log(watch());

    return (
        <div>
            <form>
                <input
                    {...register("todo")}
                    placeholder="Let me know what you gonna do."
                ></input>
                <button>Add</button>
            </form>
        </div>
    );
}

export default TodoList;
