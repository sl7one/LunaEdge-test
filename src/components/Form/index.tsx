import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "../../stories/Button";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <form
      className="w-full max-w-screen-sm mx-auto p-6 border-2 border-indigo-600 rounded-xl flex gap-4 flex-col mt-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Button label="submit"/>
    </form>
  );
}
