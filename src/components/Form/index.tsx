import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "../../stories/Button/Button";
import { InputField } from "../InputField/InputField";
import { Inputs } from "../InputField/types";
import { Selectors } from "../Selectors";

  const command = [
    "First Player",
    "Second Player",
    "Third Player",
    "Fourth Player",
  ];

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log({ data });
  };

  return (
    <form
      className="w-full max-w-screen-sm mx-auto p-6 border-2 border-indigo-600 rounded-xl flex gap-4 flex-col mt-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputField
        id="firstName"
        placeholder="Enter your first name"
        type="text"
        errors={errors}
        label="First Name"
        register={register("firstName", {
          required: true,
          minLength: 2,
          maxLength: 12,
          pattern: /^[A-Za-z]+$/i,
        })}
      />

      <InputField
        id="lastName"
        placeholder="Enter your last name"
        type="text"
        errors={errors}
        label="Last Name"
        register={register("lastName", {
          required: true,
          minLength: 2,
          maxLength: 12,
          pattern: /^[A-Za-z]+$/i,
        })}
      />

      <Selectors list={command} />
      <Button type="submit" label="submit" />
    </form>
  );
}
