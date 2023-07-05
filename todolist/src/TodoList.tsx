import { useState } from "react";

function TodoList() {
  const [todo, setTodo] = useState("");

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setTodo(value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(todo);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={todo}
          placeholder="Let me know what you gonna do."
        ></input>
        <button>Add</button>
      </form>
    </div>
  );
}

export default TodoList;
