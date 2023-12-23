import { ChevronPath } from "./Path/chevron";
import { StarPath } from "./Path/star";
import { IProps } from "./types";

export const Icon = ({
  name = "star",
  fill = "none",
  className = "w-6 h-6",
}: IProps) => {

  const icon = {
    star: <StarPath />,
    chevron: <ChevronPath />,
  };
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      {icon[name]}
    </svg>
  );
};
