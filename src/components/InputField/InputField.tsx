import { InputFieldProps } from "./types";


export const InputField = ({
  id,
  label,
  register,
  errors,
  ...props
}: InputFieldProps) => {

  const commonStyles = `border-2 rounded-lg p-3 hover:border-indigo-700 focus:border-2 focus:border-indigo-700 outline-none`;

  return (
    <div className="flex g-2 flex-col">
      <label htmlFor={id}>{label}</label>
      <input
        className={
          !errors[id] ? commonStyles : commonStyles + " border-red-700"
        }
        id={id}
        {...register}
        {...props}
      />
      {errors[id] && <span className={errors[id]&&"text-red-700"}>Field is not valid</span>}
    </div>
  );
};
