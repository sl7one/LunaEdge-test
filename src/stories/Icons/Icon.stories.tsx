import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";

const meta = {
  title: "Example/Icons",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Star: Story = {
  args: {
    name: "star",
  },
};

export const Chevron: Story = {
  args: { name: "chevron" },
};
