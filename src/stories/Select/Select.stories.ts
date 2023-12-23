import type { Meta, StoryObj } from "@storybook/react";
import SelectComponent from "./Select";

const meta = {
  title: "Example/Select",
  component: SelectComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SelectComponent>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Select: Story = {
  args: {
    id: 1525,
    selectorsList: new Array(10)
      .fill(1)
      .map((el, idx) => ({ name: `${++idx}-select-item` })),
    setSelector: (value) => {
      console.log(value);
    },
    label: "Select",
  },
};
