import { useForm } from "react-hook-form";

interface IForm {
  toDo: string;
  toDo2: string;
}

function ToDoList() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onValid = (data: IForm) => {
    console.log(data);
    setValue("toDo", "");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("toDo", { required: "Please write a to do" })}
          placeholder="Write a todo"
        />
        <input
          {...register("toDo2", { required: "Please write a to do" })}
          placeholder="Write a todo"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
