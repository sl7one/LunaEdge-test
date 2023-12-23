import React, { useState } from "react";
import { IProps } from "./types";

export default function DropDown({ data, onClickItem }: IProps) {
  const [value, setValue] = useState("");

  return (
    <div className="absolute flex flex-col">
      <input
        className="outline-none p-1 rounded-lg border-slate-300 border-2 w-full"
        type="text"
        value={value}
        onChange={({ target: { value } }) => setValue(value)}
      />
      <ul className="bg-slate-50 p-2">
        {data
          .filter((el) =>
            el.name.trim().toLowerCase().includes(value.trim().toLowerCase())
          )
          .map((item) => (
            <li
              className="p-1 hover:bg-slate-100 cursor-pointer text-nowrap capitalize"
              onClick={() => onClickItem(item?.name)}
              key={item?.name}
            >
              {item?.name}
            </li>
          ))}
      </ul>
    </div>
  );
}
