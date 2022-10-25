import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "../atoms";

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => {
      const newToDos = [{ text: toDo, id: Date.now(), category }, ...oldToDos];
      localStorage.setItem("toDos", JSON.stringify(newToDos));
      return newToDos;
    });
    setValue("toDo", "");
  };
  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input
        {...register("toDo", { required: "Please write a to do" })}
        placeholder="Write a todo"
      />
      <button>Add</button>
    </form>
  );
}

export default CreateToDo;
