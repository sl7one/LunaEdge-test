import { IMetaBlockProps } from "./types";

export const MetaBlock = ({ title, metaList, listKey }: IMetaBlockProps) => {
  console.log({ metaList, listKey });
  return (
    <div>
      <p className="font-bold">{title}</p>
      {metaList.map((list: any) => (
        <span
          key={list?.[listKey]?.name}
          className="text-xs border border-1 border-slate-300 rounded-lg p-1 bg-slate-50 inline-flex"
        >
          {list?.[listKey]?.name}
        </span>
      ))}
    </div>
  );
};
