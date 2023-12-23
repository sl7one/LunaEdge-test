export interface InputFieldProps {
  label: string;
  id: string;
  register: any;
  errors: any;
  placeholder?: string;
  type?: string;
}

export type Inputs = {
  [key: string]: string;
};
