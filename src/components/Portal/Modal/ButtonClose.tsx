import { IProps } from "./types";

export const CloseBtn = ({ setIsVisible }: IProps) => {
  return (
    <button
      className="mb-8 text-blue-500"
      type="button"
      onClick={() => setIsVisible(false)}
    >
      Close
    </button>
  );
};

