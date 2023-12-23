export interface IProps {
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}


export interface IMetaBlockProps {
  title: string;
  metaList: string[] | [];
  listKey: string;
}
