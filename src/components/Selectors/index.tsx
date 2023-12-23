import { useContext } from "react";
import { GlobalContext } from "../../context/context";
import SelectComponent from "../../stories/Select/Select";
import { IProps } from "./types";

export const Selectors = ({ list }:IProps) => {
  const { data, setSelectors } = useContext(GlobalContext)!;

  return (
    <div className="flex gap-8 justify-between">
      {list.map((title: string, id: number) => (
        <SelectComponent
          key={title}
          id={id}
          label="Pokemon"
          selectorsList={data}
          setSelector={(value) =>
            setSelectors((prev) => ({ ...prev, [id]: value }))
          }
        />
      ))}
    </div>
  );
};
