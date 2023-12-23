type DataType = {
  name: string;
};

export interface IProps {
  data: DataType[];
  onClickItem: (value: string) => void;
}



export interface IPropsSelector {
  id: number;
  label: string;
  selectorsList: DataType[];
  setSelector: (value: string) => void;
}
