import{ useState } from "react";
import { Button } from "../Button/Button";
import DropDown from "./DropDown";
import { IPropsSelector } from "./types";

export default function SelectComponent({
  selectorsList,
  label,
  setSelector,
}: IPropsSelector) {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");

  const onClickItem = (value: any) => {
    setIsOpen(false);
    setValue(value);
    setSelector(value);
  };

  return (
    <div className="relative">
      <Button
        label={!value ? label : value}
        iconAfter="chevron"
        size="sm"
        variant="text"
        onClick={() => setIsOpen((prev) => !prev)}
      />
      {isOpen && <DropDown data={selectorsList} onClickItem={onClickItem} />}
    </div>
  );
}
