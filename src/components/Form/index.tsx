import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "../../stories/Button/Button";
import { InputField } from "../InputField/InputField";
import { Inputs } from "../InputField/types";
import { Selectors } from "../Selectors";
import {  members } from "../../constants/members";
import { useContext } from "react";
import { GlobalContext } from "../../context/context";

export default function Form() {
  const { selectors, setPortalIsVisible } = useContext(GlobalContext)!;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const isValidSelectors = () =>
    Object.values(selectors).every((value) => value);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (!isValidSelectors()) return;
    setPortalIsVisible(true);

    console.log("form-data",{ data, selectors });
  };

  return (
    <form
      className="w-full max-w-screen-sm mx-auto p-6 border-2 border-indigo-600 rounded-xl flex gap-4 flex-col mt-[300px]"
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

      {!isValidSelectors() && (
        <p className="text-red-700"> Select all members</p>
      )}

      <Selectors list={members} />

      <Button type="submit" label="submit" />
    </form>
  );
}
